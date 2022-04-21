import React, { FC } from "react";
import { TextField } from "@mui/material";

interface FeedbackProps {
  message: string;
  onChange: (event: any) => void;
}

export const Feedback: FC<FeedbackProps> = ({ message, onChange }) => {
  return (
    <TextField
      id="outlined-multiline-flexible"
      multiline
      type="text"
      rows="6"
      className="feedback"
      placeholder="Type your feedback here..."
      value={message}
      onChange={onChange}
    />
  );
};
