# swapi-nodejs-main
Server:
1. You should develop an Apollo GraphQL API
2. Your GraphQL API should wrap the Star Wars API (https://swapi.dev/)
3. Your GraphQL API should have a Query type that resolves all People
(https://swapi.dev/api/people/), but only the Person's details (name, height, mass,
gender, homeworld).
4. The People Query should cater for pagination, you will notice the next property in
the response. When given a page number, the respective People page should be
returned (i.e. https://swapi.dev/api/people/?page=2)
5. Your GraphQL API should have a Query type that resolves (searches for) a
particular Person (People) given their name (i.e. https://swapi.dev/api/people/?
search=Anakin Skywalker)



1. You should develop a React Single Page App (SPA)
2. Your SPA should consume the above GraphQL API
3. Your SPA should have a Home page listing the first page of People as queried from
the above GraphQL API.
4. Additionally there should be pagination implemented allowing for a particular People
page to be Queried when a page number is selected
5. When a Person is clicked on, a Detail page outlining the Person's details should be
displayed, in a thoughtful (styled) manner.
6. The User should be able to navigate back to the Home page to the previously active
People page from the Detail page
