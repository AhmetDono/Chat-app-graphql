const messages = [
    {
      _id: "65fa1b9e1c4a1f001c4b1001",
      senderId: "65fa1b9e1c4a1f001c4b0001",  // Ali gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0002", // Ayşe aldı
      message: "Merhaba Ayşe, nasılsın?",
      timestamp: "2025-03-24T12:00:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1002",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1005",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1006",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1007",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1008",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1009",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1010",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1011",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1012",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1013",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },    {
      _id: "65fa1b9e1c4a1f001c4b1014",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },    {
      _id: "65fa1b9e1c4a1f001c4b1015",
      senderId: "65fa1b9e1c4a1f001c4b0002",  // Ayşe gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ali aldı
      message: "Merhaba Ali, iyiyim sen nasılsın?",
      timestamp: "2025-03-24T12:01:00Z",
      isRead: true
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1003",
      senderId: "65fa1b9e1c4a1f001c4b0001",  
      receiverId: "65fa1b9e1c4a1f001c4b0003", 
      message: "Selam naber.",
      timestamp: "2025-03-24T12:02:00Z",
      isRead: false
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1004",
      senderId: "65fa1b9e1c4a1f001c4b0003",  
      receiverId: "65fa1b9e1c4a1f001c4b0001", 
      message: "Iyi senden naber.",
      timestamp: "2025-03-24T12:02:00Z",
      isRead: false
    },
    {
      _id: "65fa1b9e1c4a1f001c4b1016",
      senderId: "65fa1b9e1c4a1f001c4b0001",  // Ali gönderdi
      receiverId: "65fa1b9e1c4a1f001c4b0001", // Ayşe aldı
      message: "Bu adam ayni ben",
      timestamp: "2025-03-24T12:00:00Z",
      isRead: true
    },
  ];

  export default messages;