import React, { FC } from "react";
import { Chat } from "../Chat/Chat";

interface ChatlistProps {
  chats: [];
}

export const ChatList: FC<ChatlistProps> = ({ chats }) => {
  return (
    <ul className="chatList">
      {chats.map((chat, idx) => (
        <li key={idx}>
          <Chat />
        </li>
      ))}
    </ul>
  );
};
