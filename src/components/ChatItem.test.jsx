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
    render(<ChatItem author={""} message={""} />);
    expect(screen.getByText("")).toBeInTheDocument();
    expect(screen.getByText("")).toBetoBeInTheDocument();
  });
});
