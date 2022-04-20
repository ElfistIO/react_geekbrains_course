import React, { useState, useEffect, useRef } from "react";
import { Chat } from "./Chat";
import { NameInput } from "./NameInput";
import { Feedback } from "./Feedback";
import { Submit } from "./Submit";

export const Container = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [botMessage] = useState("Your feedback accepted.");
  const [botAuthor] = useState("Bot");
  const chatEl = useRef(null);
  const changeАuthor = (event) => {
    setAuthor(event.target.value);
  };
  const changeMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { message, author, botMessage: false }]);
  };
  useEffect(() => {
    if (messages.length && !messages[messages.length - 1].botMessage) {
      setTimeout(() => {
        setMessages([
          ...messages,
          {
            message: botMessage,
            author: botAuthor,
            botMessage: true,
          },
        ]);
      }, 1500);
    }
  }, [messages.length]);
  return (
    <div className="container">
      <Chat messages={messages} refEl={chatEl} />
      <form className="form" action="submit" onSubmit={handleSubmit}>
        <NameInput author={author} onChange={changeАuthor} />
        <Feedback message={message} onChange={changeMessage} />
        <Submit disabled={message && author ? false : true} />
      </form>
    </div>
  );
};
