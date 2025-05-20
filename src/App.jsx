import React, { useState } from 'react';
import styles from './App.module.css';
import Chat from './components/Chat/Chat';
const App = () => {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <div>
      <header className={styles.Header}>
        <img src="/chat-bot-512.png" alt="" srcset="" className={styles.Logo} />
        <h2 className={styles.Title}>Hello World</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
};

const MESSAGES = [
  {
    role: 'user',
    content: 'I am good, thank you!',
  },
  {
    role: 'assistant',
    content: 'Hello, how are you?',
  },
  {
    role: 'user',
    content: 'I am good, thank you!',
  },
  {
    role: 'assistant',
    content: 'Hello, how are you?',
  },
  {
    role: 'user',
    content: 'I am good, thank you!',
  },
  {
    role: 'assistant',
    content: 'Hello, how are you?',
  },
  {
    role: 'user',
    content: 'I am good, thank you!',
  },
  {
    role: 'assistant',
    content: 'Hello, how are you?',
  },
  {
    role: 'user',
    content: 'I am good, thank you!',
  },
  {
    role: 'assistant',
    content: 'Hello, how are you?',
  },
];

export default App;
