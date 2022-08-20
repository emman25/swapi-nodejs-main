import { ApolloServer, gql } from 'apollo-server-express';
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import express from 'express';
import http from 'http';
import resolvers from "./resolver";
import cors from 'cors'


const typeDefs = gql`


  type Results {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: String
    created: String
    edited: String
    url: String
    starships: [String]
    vehicles: [String]
    species: [String]
    films: [String]
  }
  
  type Main {
    count: Int
    next: String
    previous: String
    results: [Results]
  }

  type Query {
    people(page: Int): Main
    search(text: String): Main
  }
`;

async function startApolloServer(resolvers, typeDefs) {
    const app = express();

    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });
    await server.start();
    server.applyMiddleware({ app });

    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(resolvers, typeDefs)