import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types 
import { typeDefs } from './schema';

// Server setup
const server = new ApolloServer({
    typeDefs //  types
    //  resolvers


});

const {url} = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`);