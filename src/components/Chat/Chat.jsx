import React from 'react';
import styles from './Chat.module.css';
import Markdown from 'react-markdown';
const Chat = ({ messages }) => {
  return (
    <div className={styles.Chat}>
      {messages.map((message, index) => (
        <div key={index} data-role={message.role} className={styles.Message}>
          <Markdown>{message.content}</Markdown>
        </div>
      ))}
    </div>
  );
};

export default Chat;
