import React, { FC } from "react";
import { TextField } from "@mui/material";

interface NameInputProps {
  author: string;
  onChange: (event: any) => void;
}

export const NameInput: FC<NameInputProps> = ({ author, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Name"
      variant="outlined"
      type="text"
      className="name__input"
      placeholder="Enter your Name..."
      value={author}
      onChange={onChange}
      autoFocus={true}
    />
  );
};
