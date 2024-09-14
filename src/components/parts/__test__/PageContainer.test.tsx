import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import PageContainer from "../PageContainer";

describe("PageContainer", () => {
  beforeEach(() => {
    render(<PageContainer>PageContainer</PageContainer>);
  });
  test("PageContainerが正しく表示されること", () => {
    const divElement = screen.getByText("PageContainer");
    expect(divElement).toBeInTheDocument();
  });
});
