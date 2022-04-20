import React from "react";

export const Feedback = (props) => {
  return (
    <textarea
      rows="6"
      className="feedback"
      placeholder="Type your feedback here..."
      value={props.message}
      onChange={props.onChange}
    />
  );
};
