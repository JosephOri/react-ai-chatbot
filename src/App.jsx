import React, { useState } from 'react';
import styles from './App.module.css';
import Chat from './components/Chat/Chat';
import Controls from './components/Controls/Controls';
import { Assistant } from './assistants/openai';
import { Loader } from './components/Loader/Loader';
const App = () => {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello, how can I help you today?',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (content, role) => {
    console.log(content, role);
    setMessages((prev) => [...prev, { role: role, content: content }]);
  };

  async function handleContentSend(content) {
    addMessage(content, 'user');
    setIsLoading(true);
    try {
      const result = await assistant.chat(content);
      addMessage(result, 'assistant');
    } catch (error) {
      addMessage({
        content: 'An error occurred while processing your request. Please try again.',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <img src="/chat-bot-512.png" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls isDisabled={isLoading} onSend={handleContentSend} />
    </div>
  );
};

export default App;
