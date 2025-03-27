const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiver:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    isRead:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Message',MessageSchema);