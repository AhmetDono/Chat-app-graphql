import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import styles from './MessageArea.module.css'
import { CREATE_MESSAGE } from './queries';

function MessageArea({reciever_id}) {
    const [message,setMessage] = useState(null)
    const recieverId = reciever_id;
    const senderId = localStorage.getItem('userId');

    const [sendMessage, { loading, error }] = useMutation(CREATE_MESSAGE);

    const handleSendMessage = async () => {
        if (!message.trim()) return; // Mesaj boşsa işlem yapma
    
        try {
          await sendMessage({
            variables: {
              sender: senderId,
              receiver: recieverId,
              message: message,
            },
          });
    
          setMessage(""); // Mesaj gönderildikten sonra input'u temizle
        } catch (err) {
          console.error("Mesaj gönderme hatası:", err);
        }
      };

  return (
    <div className={`${styles.messageInput}`}>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="Type a message..." />
        <button onClick={handleSendMessage} disabled={loading}>
        {loading ? "Gönderiliyor..." : "Gönder"}
      </button>
      {error && <p>Hata: {error.message}</p>}
    </div>
  )
}

export default MessageArea