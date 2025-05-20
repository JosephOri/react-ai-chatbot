import React, { useState } from 'react';
import styles from './Controls.module.css';

const Controls = ({ onSend }) => {
  const [content, setContent] = useState('');

  const handleContentSend = () => {
    if (content) {
      onSend(content);
      setContent('');
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleContentSend();
    }
  };

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          placeholder="Type your message here..."
          className={styles.TextArea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleEnterPress}
        />
      </div>
      <button className={styles.Button} onClick={handleContentSend}>
        <SendIcon />
      </button>
    </div>
  );
};

const SendIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
      <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
    </svg>
  );
};
export default Controls;
