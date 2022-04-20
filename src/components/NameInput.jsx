import React from "react";

export const NameInput = (props) => {
  return (
    <input
      type="text"
      className="name__input"
      placeholder="Enter your Name..."
      value={props.author}
      onChange={props.onChange}
    />
  );
};
