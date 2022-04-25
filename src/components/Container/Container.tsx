import { Header } from "../Header";
import { Home } from "../../pages/Home";
import { Profile } from "../../pages/Profile";
import React, { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chats } from "../../pages/Chats";
import { ChatList } from "../ChatList/ChatList";

export interface IChats {
  id: string;
  name: string;
}

const initialChatList: IChats[] = [
  {
    id: "default",
    name: "chat",
  },
];

export interface Messages {
  botMessage: any;
  message: any;
  author: string;
}

export const Container: FC = () => {
  const [chatList, setChatList] = useState<IChats[]>(initialChatList);
  const [messages, setMessages] = useState<Messages[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats">
            <Route
              index
              element={<ChatList chatList={chatList} onAddChat={setChatList} />}
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  chatList={chatList}
                  onAddChat={setChatList}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
