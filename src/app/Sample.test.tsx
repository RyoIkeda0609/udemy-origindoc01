import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Sample from "./Sample";

describe("Sample", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<Sample />);
    const enter = screen.getByText(/enter/i);
    expect(enter).toBeInTheDocument();
  });
});
