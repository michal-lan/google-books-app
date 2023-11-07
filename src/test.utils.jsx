import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui,
  {
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>{children}</BrowserRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {renderWithProviders as render}