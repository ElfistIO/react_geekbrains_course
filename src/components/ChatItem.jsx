import React from "react";

export const ChatItem = (props) => {
  return (
    <>
      <span className="message__author">{props.message.author}</span>
      <br />
      <span className="message__text">{props.message.message}</span>
    </>
  );
};
