import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import SentenceP from "../SentenceP";

describe("SentenceP", () => {
  beforeEach(() => {
    render(<SentenceP>センテンスP</SentenceP>);
  });
  test("SentencePが正しく表示されること", () => {
    const pElement = screen.getByText("センテンスP");
    expect(pElement).toBeInTheDocument();
  });
});
