import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
  });
  it("Shows the word Home", () => {
    render(<Home />);
    const title = screen.queryByText("Home");
    expect(title).toBeVisible();
  });
});
