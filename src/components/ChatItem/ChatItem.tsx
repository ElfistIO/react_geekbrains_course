import React, { FC } from "react";

interface ChatItemProps {
  message: Message;
}

interface Message {
  author: string;
  message: string;
}

export const ChatItem: FC<ChatItemProps> = ({ message }) => {
  return (
    <>
      <span className="message__author">
        <b>{message.author}</b>
      </span>
      <br />
      <span className="message__text">{message.message}</span>
    </>
  );
};
