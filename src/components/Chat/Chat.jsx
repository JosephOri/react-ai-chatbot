import React, { useEffect, useRef } from 'react';
import styles from './Chat.module.css';
import Markdown from 'react-markdown';
const Chat = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.Chat}>
      {messages.map((message, index) => (
        <div key={index} data-role={message.role} className={styles.Message}>
          <Markdown>{message.content}</Markdown>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;
