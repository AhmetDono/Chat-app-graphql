export const User = {
    messages: async(parent,__,{db}) => await db.Message.find({senderId:parent.id})
}
