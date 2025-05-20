import React from 'react';
import styles from './Chat.module.css';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: 'Hello, how can I help you today?',
};

const Chat = ({ messages }) => {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div key={index} data-role={role} className={styles.Message}>
          {content}
        </div>
      ))}
    </div>
  );
};

export default Chat;
