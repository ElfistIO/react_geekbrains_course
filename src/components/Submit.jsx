import React from "react";

export const Submit = (props) => {
  return (
    <button className="submit" disabled={props.disabled}>
      Submit
    </button>
  );
};
