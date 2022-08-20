import axios from 'axios'

const fetchSwapi = async ({page}) => {
    try {

        console.log(page)

        var options = { method: 'GET', url: 'https://swapi.dev/api/people', params: { page } };

        let { data, status } = await axios.request(options)

        console.log(data)

        return data
    } catch (error) {
        console.log(error)
    }

}

const searchSwapi = async ({text}) => {
    try {

        console.log(text)

        var options = { method: 'GET', url: 'https://swapi.dev/api/people', params: { search: text } };

        let { data, status } = await axios.request(options)

        console.log(data)

        return data
    } catch (error) {
        console.log(error)
    }

}

const resolvers = {
    Query: {
        people: (_, {page}) => fetchSwapi({page}),
        search: (_, {text}) => searchSwapi({text}),
    },
};
export default resolvers;