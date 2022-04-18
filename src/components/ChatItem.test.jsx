import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatItem } from "./ChatItem";

describe("ChatItem", () => {
  it("Render component", () => {
    render(<ChatItem />);
  });

  it("Render with snapshot", () => {
    const { asFragment } = render(<ChatItem />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Render component author/bot", () => {
    render(<ChatItem author={author} message={message} />);
    expect(screen.getByText({ author })).toBeInTheDocument();
    expect(screen.getByText({ message })).toBetoBeInTheDocument();
  });
});
