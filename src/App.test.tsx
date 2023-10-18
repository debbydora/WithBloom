import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have vite", () => {
    render(<App />)
    const message = screen.queryByText(/Vite \+ React/);
    expect(message).toBeVisible();
})