const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://billnobill:Lu1zH3nr1qu3@cluster0.pdxwupv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Definindo o esquema e modelo de dados
const messageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const conversationSchema = new mongoose.Schema({
  conversation_id: String,
  messages: [messageSchema],
});

const Conversation = mongoose.model("Conversation", conversationSchema);

app.post("/saveConversation", async (req, res) => {
  console.log("Received POST request on /saveConversation"); // Adicione este log

  const { conversation_id, messages } = req.body;

  try {
    let conversation = await Conversation.findOne({ conversation_id });

    if (conversation) {
      conversation.messages = [...conversation.messages, ...messages];
    } else {
      conversation = new Conversation({ conversation_id, messages });
    }

    await conversation.save();
    res.status(200).send("Conversa salva com sucesso.");
  } catch (error) {
    console.error("Error saving conversation:", error); // Adicione este log
    res.status(500).send("Erro ao salvar a conversa: " + error.message);
  }
});

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
