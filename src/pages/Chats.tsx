import { ChatList } from "../Components/ChatList/ChatList";
import React, { FC, useEffect, useState } from "react";
import { Chat } from "../Components/Chat/Chat";
import { Feedback } from "../Components/Feedback/Feedback";
import { NameInput } from "../Components/NameInput/NameInput";
import { Submit } from "../Components/Submit/Submit";
import { IChats, Messages } from "Components/Container/Container";
import { useParams } from "react-router-dom";

interface ChatsProps {
  messages: Messages[];
  setMessages: (messages: Messages[]) => void;
  chatList: IChats[];
  onAddChat: (chat: IChats[]) => void;
}

export const Chats: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
}) => {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [botMessage] = useState("Your feedback accepted.");
  const [botAuthor] = useState("Bot");
  const { chatId } = useParams();
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
      <ChatList chatList={chatList} onAddChat={onAddChat} />
      <Chat messages={messages} />
      <form className="form" onSubmit={handleSubmit}>
        <NameInput author={author} onChange={changeАuthor} />
        <Feedback message={message} onChange={changeMessage} />
        <Submit disabled={message && author ? false : true} />
      </form>
    </div>
  );
};
