import React from "react";
import { ChatItem } from "./ChatItem";

export const Chat = (props) => {
  return (
    <ul className="chat" ref={props.refEl}>
      {props.messages.map((message, idx) => (
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
