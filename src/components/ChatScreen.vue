<template>
  <div class="chat-container">
    <div class="chat-messages" id="chat-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="message.type"
      >
        {{ message.text }}
      </div>
    </div>
    <form id="chat-form" @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="userInput"
        placeholder="Digite sua mensagem..."
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { GoogleGenerativeAI } from "@google/generative-ai";

export default {
  name: "ChatScreen",
  data() {
    return {
      userInput: "",
      messages: [
        {
          type: "bot-message",
          text: `Olá, usuário. Sou o Chat TI Ajuda. A sua mensagem foi recebida através
            do protocolo TCP, porta 80, e interpretada pelo meu parser. O seu pedido
            foi analisado e, após uma análise semântica, concluí que você deseja
            iniciar uma sessão de comunicação. Para otimizar a transferência de
            dados e garantir uma latência mínima, me informe qual o seu objetivo
            principal, por favor. A minha arquitetura de rede está pronta para
            receber sua requisição, mas precisarei de informações adicionais para
            direcioná-la para o processamento adequado.`,
        },
      ],
      genAI: new GoogleGenerativeAI("AIzaSyD86naXzhpMMHqtxryQGpRYQXE9BjuxzQA"),
      chatSession: null,
    };
  },
  mounted() {
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    this.chatSession = model.startChat({
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        responseMimeType: "text/plain",
      },
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Você agora é um mestre em informática e em computadores, tire todas as dúvidas do usuário e recepcione ele bem. Não precisa se apresentar, fala em uma linguagem absurdamente técnica, um nivel quase incompreenssivel de técnico, que o usuario não entenda quase nada.",
            },
          ],
        },
      ],
    });
  },
  methods: {
    async sendMessageToBot(message) {
      const result = await this.chatSession.sendMessage(message);
      return result.response.text();
    },
    appendMessage(type, message) {
      this.messages.push({ type, text: message });
    },
    async handleSubmit() {
      const userMessage = this.userInput.trim();
      if (userMessage === "") return;

      this.appendMessage("user-message", userMessage);
      this.userInput = "";

      const botResponse = await this.sendMessageToBot(userMessage);
      this.appendMessage("bot-message", botResponse);
    },
  },
};
</script>

<style scoped>
/*--------------------------------------------------Fontes*/
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

/*--------------------------------------------------Scroll bar*/
.chat-messages::-webkit-scrollbar {
  width: 3px;
}

.chat-messages::-webkit-scrollbar-track {
  background: rgb(59, 59, 59);
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0);
  border-radius: 1px;
  border: 10px solid #ffffff00;
}

.chat-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  box-shadow: 0 4px 8px #0000001a;
}

.chat-messages {
  padding: 10px;
  overflow-y: scroll;
}

.user-message {
  background-color: #4caf50;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  color: white;
}

.bot-message {
  background-color: #404040;
  color: white;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 15px;
}

form {
  display: flex;
  padding: 10px;
  background-color: #333;
  align-items: center;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 0px solid #555;
  border-radius: 20px;
  outline: none;
  color: #ccc;
  background-color: #444;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
}

input[type="text"]::placeholder {
  color: #a4a4a4;
}

button {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 20px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 15px;
  -webkit-transition: background-color 0.3s ease;
  -moz-transition: background-color 0.3s ease;
  -ms-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 800px) {
  .chat-container {
    max-width: none;
    border-radius: 0px;
  }
}
</style>
