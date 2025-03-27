import {GraphQLServer, PubSub} from 'graphql-yoga'
import db from './db';

db();

import User  from"./models/User"
import Message  from"./models/Message"

import typeDefs from '@type-defs';
import resolvers from '@resolvers';


const pubsub = new PubSub();
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context:{pubsub,db:{User,Message}},
    subscriptionServerOptions: {
        port: 4001,
        context: { pubsub,db:{User,Message} }
    }
})

server.start(({port:5000}),()=> console.log("server is running localhost 5000"))


