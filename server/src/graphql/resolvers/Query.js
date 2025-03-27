export const Query = {
    users: async (_,__,{db}) => {
        const users = await db.User.find();
        return users
    },
    user: async (_,args,{db}) => {
        const user = await db.User.findById(args.id)
        if(!user) return new Error("User not found")
            
        return user
    },
    messages:async (_, {sender, receiver} ,{db}) => {
        // Boş bir filtre nesnesi oluşturuyoruz
    const filter = {};
    
    // senderId varsa, filtreye ekliyoruz
    if (sender) {
        filter.sender = sender;
    }

    // receiverId varsa, filtreye ekliyoruz
    if (receiver) {
        filter.receiver = receiver;
    }

    // MongoDB'den filtreye göre mesajları çekiyoruz
    const messages = await db.Message.find(filter);
    
    return messages;
    },
    message:async (_,args,{db}) => {
        const message = await db.findById(args.id);
        if(!message) return new Error("Message not found")

        return message
    }

}
