import React from 'react';

const Chat = ({ messages }) => {
  return (
    <div>
      {messages.map(({ role, content }, index) => (
        <div key={index} data-role={role}>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
