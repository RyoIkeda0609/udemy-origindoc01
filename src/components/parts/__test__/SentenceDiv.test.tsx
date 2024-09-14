import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import SentenceDiv from "../SentenceDiv";

describe("SentenceDiv", () => {
  beforeEach(() => {
    render(<SentenceDiv>センテンスDiv</SentenceDiv>);
  });

  test("SentenceDivが表示されること", () => {
    const divElement = screen.getByText("センテンスDiv");
    expect(divElement).toBeInTheDocument();
  });
});
