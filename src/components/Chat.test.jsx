import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { Chat } from "./Chat";

describe("Chat", () => {
  it("Render component", () => {
    render(<Chat />);
  });

  it("Render with snapshot", () => {
    const { asFragment } = render(<Chat />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("User feedback", () => {
    render(<Chat />);
    expect(screen.getByText({ author })).toBeInTheDocument();
    expect(screen.getByText({ message })).toBetoBeInTheDocument();
  });

  it("Bot answer", async () => {
    render(<Chat />);
    expect(await screen.getByText("Bot")).toBeInTheDocument();
    expect(
      await screen.getByText("Your feedback accepted.")
    ).toBetoBeInTheDocument();
  });
});
