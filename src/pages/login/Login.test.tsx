import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase";
import { MemoryRouter } from "react-router-dom";
import { validateEmail } from "../../components/InputField";
import Login from "./Login";

initializeApp(firebaseConfig);

describe("Login", () => {
  it("renders login component", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const loginElement = screen.getByText(/Log in/i);
    expect(loginElement).toBeInTheDocument();
  });

  it("Email field should have label", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const input = screen.getByLabelText(/email/i);
    expect(input.getAttribute("name")).toBe("email");
  });

  it("validate function should render correct input", () => {
    const text = "babyboo@gmail.com";
    expect(validateEmail(text)).toBe(true);
  });

  it("validate function should fail on incorrect input", () => {
    const text = "babyboo";
    expect(validateEmail(text)).not.toBe(true);
  });

  it("email input should accept text", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveValue("");
    fireEvent.change(emailInput, { target: { value: "test" } });
    expect(emailInput).toHaveValue("test");
  });

  it("Should be able to submit login form", async () => {
    const mockfn = vi.fn();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const button = await screen.findByRole("submitlogin");
    fireEvent.click(button);
    waitFor(() => {
      expect(mockfn).toHaveBeenCalled();
    });
    waitFor(() => {
      expect(mockfn).toBeCalledTimes(1);
    });
  });
});
