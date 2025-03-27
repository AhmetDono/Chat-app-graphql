import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
query deneme($sender: String, $receiver: String) {
  messagesFromAtoB: messages(sender: $sender, receiver: $receiver) {
    id
    sender {
      id
      name
    }
    receiver {
      id
      name
    }
    message
    createdAt
    isRead
  }
  messagesFromBtoA: messages(sender: $receiver, receiver: $sender) {
    id
    sender {
      id
      name
    }
    receiver {
      id
      name
    }
    message
    createdAt
    isRead
  }
}
`


export const A_B_MESSAGE_SUBSCRIPTION = gql`
  subscription denemeSeek($sender: String, $receiver: String) {
    messageCreated(sender: $sender, receiver: $receiver) {
      id
      sender{
        id
        name
      }
      receiver{
        id
        name
      }
      message
      createdAt
    }

  }
`