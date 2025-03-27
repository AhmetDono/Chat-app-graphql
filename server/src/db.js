const mongoose = require("mongoose") 

export default async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ChatApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB'ye başarıyla bağlandı!");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
    process.exit(1);
  }
};

