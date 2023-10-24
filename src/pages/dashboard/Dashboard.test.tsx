import {render, screen,} from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

initializeApp(firebaseConfig);

describe("Dashboard", () => {

  it("renders Dashboard component", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
      const dashboardElement = screen.getByRole("heading");
    expect(dashboardElement).toHaveTextContent(/All\scoins/i)
  });
    
    it("renders a filter text", () => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      );
      const dashboardElement = screen.getByText(/filter/i);
      expect(dashboardElement).toBeInTheDocument()
    });
});
