import React, { useState } from 'react';
import styles from './App.module.css';
import Chat from './components/Chat/Chat';
import Controls from './components/Controls/Controls';
import { Assistant } from './assistants/openai';
const App = () => {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello, how can I help you today?',
    },
  ]);

  const addMessage = (content, role) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  async function handleContentSend(content) {
    addMessage(content, 'user');
    try {
      const result = await assistant.chat(content);
      addMessage(result, 'assistant');
    } catch (error) {
      addMessage({
        content: 'An error occurred while processing your request. Please try again.',
      });
      throw error;
    }
  }
  return (
    <div>
      <header className={styles.Header}>
        <img src="/chat-bot-512.png" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
};

export default App;
