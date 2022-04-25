import React, { FC } from "react";
import { ChatItem } from "../ChatItem/ChatItem";

interface ChatProps {
  messages: Messages[];
}

interface Messages {
  botMessage: any;
  message: any;
  author: string;
}

export const Chat: FC<ChatProps> = ({ messages }) => {
  return (
    <ul className="chat">
      {messages.map((message, idx) => (
        <li
          key={idx}
          className={message.botMessage ? "bot-message" : "message"}
        >
          <ChatItem message={message} />
        </li>
      ))}
    </ul>
  );
};
