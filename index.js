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

        game(_,args){
            return db.games.find((game)=> game.id === args.id)
        },

        authors(){
            return db.authors
        },
        author(_,args){
            return db.authors.find((author)=> author.id === args.id)
        },

        reviews() {
            return db.reviews
        },
        review(_,args){
            return db.reviews.find((review)=> review.id === args.id)

        }    
    }
    ,
    Game: {
        reviews(parent){
            return db.reviews.filter((review)=> review.game_id === parent.id)
        }
    },
    Review: {
        game(parent){
            return db.games.find((game)=> game.id === parent.game_id    )
        },
        author(parent){
            return db.authors.find((author)=> author.id === parent.author_id)
        }
    },
    Author: {
        reviews(parent){
            return db.reviews.filter((review)=> review.author_id === parent.id)
        }
    }
}

// Server setup
const server = new ApolloServer({
    typeDefs, //  types
    resolvers // resolvers
});

const {url} = await startStandaloneServer(server, {
    listen: { port: 4001 }
});

console.log(`🚀 Server ready at ${url}`);