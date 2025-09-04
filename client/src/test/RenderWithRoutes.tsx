import React from "react";
import type { ReactElement } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render } from "@testing-library/react";

export function RenderWithRoutes(ui: ReactElement, route: string = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/" element={ui}>
          <Route index element={<div data-testid="outlet">OUTLET</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
