import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Data
import db from './_db.js';
// types 
import { typeDefs } from './schema.js';  

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        reviewById(_,args){
            return db.reviews.find((review)=> review.id === args.id)

        },
        authors(){
            return db.authors
        }
    }
}

// Server setup
const server = new ApolloServer({
    typeDefs, //  types
    resolvers // resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`);