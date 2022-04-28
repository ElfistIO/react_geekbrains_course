// import React from "react";
// import { fireEvent, render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { Container } from "./Container";
// import userEvent from "@testing-library/user-event";

// describe("Container", () => {
//   it("render component", () => {
//     render(<Container />);
//   });
//   it("render with snapshot", () => {
//     const { asFragment } = render(<Container />);
//     expect(asFragment()).toMatchSnapshot();
//   });
//   it("message test", () => {
//     render(<Container />);
//     fireEvent.input(screen.getByTestId("message"), {
//       target: { value: "Some message" },
//     });
//     fireEvent.click(screen.getByTestId("button"));
//     expect(screen.getByTestId("message")).toContainHTML("Some message");
//   });
//   it("bot answer", async () => {
//     render(<Container />);
//     fireEvent.input(screen.getByTestId("Bot"), {
//       target: { value: "Bot" },
//     });
//     await userEvent.click(screen.getByRole("button"));
//     expect(
//       setTimeout(() => screen.findByText("Your feedback accepted."), 1000)
//     ).toBeTruthy();
//   });
// });
