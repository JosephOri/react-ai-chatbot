import React, { useState } from 'react';
import styles from './App.module.css';
import Chat from './components/Chat/Chat';
import Controls from './components/Controls/Controls';
const App = () => {
  const [messages, setMessages] = useState([]);

  const handleContentSend = (content) => {
    setMessages((prev) => [...prev, { role: 'user', content }]);
  };

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
