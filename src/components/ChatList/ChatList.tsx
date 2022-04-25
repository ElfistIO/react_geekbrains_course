import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IChats } from "../Container/Container";
import { nanoid } from "nanoid";

interface ChatlistProps {
  chatList: IChats[];
  onAddChat: (chats: IChats[]) => void;
}

export const ChatList: FC<ChatlistProps> = ({ chatList, onAddChat }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      onAddChat([
        ...chatList,
        {
          id: nanoid(),
          name,
        },
      ]);
      setName("");
    }
  };

  return (
    <>
      <ul className="chatList">
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Input chat name..."
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
    </>
  );
};
