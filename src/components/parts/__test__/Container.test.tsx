import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Container from "../Container";

describe("Container", () => {
  beforeEach(() => {
    render(<Container>Container</Container>);
  });
  test("Containerが正しく表示されること", () => {
    const divElement = screen.getByText("Container");
    expect(divElement).toBeInTheDocument();
  });
});
