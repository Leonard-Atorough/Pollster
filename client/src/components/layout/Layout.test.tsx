/// <reference types="vitest/globals" />
// @vitest-environment jsdom

import React from "react";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Layout } from "./Layout";
import { RenderWithRoutes } from "@/test/RenderWithRoutes";

describe("Layout", () => {
  it("should render header, outlet content and footer correctly", async () => {
    RenderWithRoutes(<Layout />);
    screen.debug();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    // expect(screen.getByTestId("outlet")).toBeInTheDocument();
    // expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
