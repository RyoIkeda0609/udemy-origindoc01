import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Title from "../Title";

describe("Title test", () => {
  beforeEach(() => {
    render(<Title>タイトルコンポーネント</Title>);
  });
  test("タイトルがh2で表示されること", () => {
    const titleElement = screen.getByRole("heading", { level: 2 });
    expect(titleElement).toBeInTheDocument();
  });

  test("タイトルが正しく表示されること", () => {
    const titleElement = screen.getByText("タイトルコンポーネント");
    expect(titleElement).toBeInTheDocument();
  });
});
