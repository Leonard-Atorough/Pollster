// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("jsdom environment", () => {
  it("should have document defined", () => {
    expect(typeof document).toBe("object");
  });
});

describe("DOM sanity", () => {
  it("should render and assert with jest-dom", () => {
    render(<div role="banner">Hello</div>);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
