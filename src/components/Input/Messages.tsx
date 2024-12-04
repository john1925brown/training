import { useState } from 'react';
import { Input } from './Input';

export const Messages = () => {
  const [messages, setMessages] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ]);

  const addNewMessage = (newMessageValue: string) => {
    const newMessage = { message: newMessageValue };

    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <Input addNewMessage={addNewMessage} />
      <ul>
        {messages.map((m, index) => {
          return <li key={index}>{m.message}</li>;
        })}
      </ul>
    </div>
  );
};
