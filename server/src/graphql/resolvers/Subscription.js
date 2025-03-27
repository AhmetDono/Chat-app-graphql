import { withFilter } from 'graphql-yoga'

export const Subscription = {
    userCreated:{
        subscribe:(_,__,{pubsub})=>{
            return pubsub.asyncIterator('userCreated')
        }
    },
    userUpdated:{
        subscribe:(_,__,{pubsub})=>{
            return pubsub.asyncIterator('userUpdated')
        }
    },
    userDeleted:{
        subscribe:(_,__,{pubsub})=>{
            return pubsub.asyncIterator('userDeleted')
        }
    },
    //Message subscrıptıonları gelecek
     messageCreated: {
        subscribe: (_, { sender, receiver }, { pubsub }) => {
            // Create a unique channel identifier for the specific conversation
            const channel = `messageCreated-${sender}-${receiver}`;
            
            // Listen to the specific channel
            return pubsub.asyncIterator(channel);
          }
    },
    messageUpdated: {
        subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("messageUpdated"),
    },
    messageDeleted: {
        subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("messageDeleted"),
    }
}
