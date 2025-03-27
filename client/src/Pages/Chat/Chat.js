import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MESSAGES ,A_B_MESSAGE_SUBSCRIPTION} from './queries';  // Assuming the query is in a separate file
import styles from './Chat.module.css';
import ChatBar from '../../Components/ChatBar/ChatBar';
import MessageArea from '../../Components/MessageArea/MessageArea';

function Chat() {
  const { id } = useParams(); // receiverId
  const senderId = localStorage.getItem('userId');

  // Query the messages from both directions (sender to receiver and receiver to sender)
  const { loading, error, data,subscribeToMore } = useQuery(GET_MESSAGES, {
    variables: { sender: senderId, receiver: id },
  });

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: A_B_MESSAGE_SUBSCRIPTION,
      variables: { sender: senderId, receiver: id },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
  
        const newMessage = subscriptionData.data.messageCreated;
  
        // Eğer mesajın göndericisi şu anki kullanıcı ise AtoB'ye ekle, değilse BtoA'ya ekle
        if (newMessage.senderId === senderId) {
          return {
            messagesFromAtoB: [...prev.messagesFromAtoB, newMessage],
            messagesFromBtoA: prev.messagesFromBtoA, // Diğer listeyi değiştirme
          };
        } else {
          return {
            messagesFromAtoB: prev.messagesFromAtoB,
            messagesFromBtoA: [...prev.messagesFromBtoA, newMessage],
          };
        }
      },
    });
  
    return () => unsubscribe();
  }, [subscribeToMore, senderId, id]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const messages = [
    ...data.messagesFromAtoB,
    ...data.messagesFromBtoA,
  ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));



  return (
    <div className={`row ${styles.chatContainer}`}>
      <div className={`col-4 ${styles.chatBarContainer}`}>
        <ChatBar />
      </div>
      <div className={`col-8 ${styles.messageWrapper}`}>
        {/* Messages Container */}
        <div className={`${styles.messageContainer}`}>
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className={`${styles.message} ${
                  msg.sender.id === senderId
                    ? styles.sentMessage
                    : styles.receivedMessage
                }`}
              >
                <span>{msg.message}</span>
              </div>
            );
          })}
        </div>
        {/* Message Input */}
        {/* <div className={`${styles.messageInput}`}>
          <textarea placeholder="Type a message..." />
        </div> */}
        <MessageArea reciever_id={id} />
      </div>
    </div>
  );
}

export default Chat;
