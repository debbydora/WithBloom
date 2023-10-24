import { render, screen } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase";
import { MemoryRouter } from "react-router";
import Router from "./routes/Routes";
import { AuthContext, AuthContextProps } from "./context/AuthContext";

initializeApp(firebaseConfig);


const mockAuthContextValue = {
  user: {
    name: "Ada",
  },
};

const MockAuthProvider = ({ children }: AuthContextProps) => (
  <AuthContext.Provider value={mockAuthContextValue}>
    {children}
  </AuthContext.Provider>
);


it("Renders not found if invalid path", () => {
  render(
    <MemoryRouter initialEntries={["/hello"]}>
      <MockAuthProvider>
        <Router />
      </MockAuthProvider>
    </MemoryRouter>
  );
  const NotFoundElement = screen.getByText(/PAGE NOT FOUND/i);
  expect(NotFoundElement).toBeVisible();
});

