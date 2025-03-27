export const Mutation = {
    //USER CRUD İŞLEMLERİ
    createUser:async (_,{data},{pubsub,db}) => {
        console.log("Yeni kullanıcı verisi:", data);
        const newUser = new db.User({...data});
        const user = await newUser.save();

        if (!user) {
            throw new Error("Kullanıcı oluşturulamadı!");
          }

        pubsub.publish('userCreated',{userCreated:user});
        return user
    },
    updateUser:async (_,{id,data},{pubsub,db}) => {
        const isUserExists = await db.User.findById(id);
        if(!isUserExists) return new Error("User not found");

        const updatedUser = db.User.findByIdAndUpdate(id,data,{new:true});

        pubsub.publish('userUpdated',{userUpdated:updatedUser});
        return updatedUser
    },
    deleteUser:async (_,{id},{pubsub,db}) => {
        const isUserExists = await db.User.findById(id);
        if(!isUserExists) return new Error("User not found");

        const deletedUser = await db.User.findByIdAndDelete(id)

        pubsub.publish('userDeleted',{userDeleted:deletedUser})
        return deletedUser
    },
    deleteAllUser: async (_,__,{db})=>{
        const deleteUsers = await db.User.deleteMany({});
        return {count:deleteUsers.deletedCount}
    },

    //MESSAGE CRUD İŞLEMLERİ
    createMessage:async (_,{data},{pubsub,db}) => {
        const newMessage = new db.Message({...data});
        const message = await newMessage.save();

        // pubsub.publish('messageCreated',{messageCreated:message});

        pubsub.publish(`messageCreated-${data.sender}-${data.receiver}`, { messageCreated: message });
        pubsub.publish(`messageCreated-${data.receiver}-${data.sender}`, { messageCreated: message });

        return message
    },
    updateMessage:async (_,{id,data},{pubsub,db}) => {
        const isMessageExists = await db.Message.findById(id);
        if(!isMessageExists) return new Error("Message not found");

        const updatedMessage = db.Message.findByIdAndUpdate(id,data,{new:true});

        pubsub.publish('messageUpdated',{messageUpdated:updatedMessage});
        return updatedMessage
    },
    deleteMessage:async (_,{id},{pubsub,db}) => {
        const isMessageExists = await db.Message.findById(id);
        if(!isMessageExists) return new Error("Message not found");

        const deletedMessage = await db.Message.findByIdAndDelete(id)

        pubsub.publish('messagerDeleted',{messagerDeleted:deletedMessage})
        return deletedMessage
    },
    deleteAllMessage: async (_,__,{db})=>{
        const deleteMessages = await db.Message.deleteMany({});
        return {count:deleteMessages.deletedCount}
    },
}
