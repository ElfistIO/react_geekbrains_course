import React, { FC, useState, useEffect, useCallback } from "react";
import { Chat } from "../Chat/Chat";
import { NameInput } from "../NameInput/NameInput";
import { Feedback } from "../Feedback/Feedback";
import { Submit } from "../Submit/Submit";

interface Messages {
  botMessage: any;
  message: any;
  author: string;
}

export const Container: FC = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [botMessage] = useState("Your feedback accepted.");
  const [botAuthor] = useState("Bot");

  const changeАuthor = (event: any) => {
    setAuthor(event.target.value);
  };

  const changeMessage = (event: any) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setMessages([...messages, { message, author, botMessage: false }]);
    setMessage("");
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
      }, 1000);
      clearTimeout();
    }
  }, [messages.length]);

  return (
    <div className="container">
      <Chat messages={messages} />
      <form className="form" onSubmit={handleSubmit}>
        <NameInput author={author} onChange={changeАuthor} />
        <Feedback message={message} onChange={changeMessage} />
        <Submit disabled={message && author ? false : true} />
      </form>
    </div>
  );
};
