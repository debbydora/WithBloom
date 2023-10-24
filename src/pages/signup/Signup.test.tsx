import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase";
import { MemoryRouter } from "react-router-dom";
import Signup from "./Signup";
import { validateEmail } from "../../components/InputField";

initializeApp(firebaseConfig);

describe("Signup", () => {
    it("renders Signup component", () => {
      render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      );
      const loginElement = screen.getByRole("heading");
      expect(loginElement).toHaveTextContent(/sign up/i);
    });

    it("Email field should have label", () => {
      render(
        <MemoryRouter>
          <Signup />
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
          <Signup />
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
          <Signup />
        </MemoryRouter>
      );
      const button = await screen.findByRole("submitsignup");
      fireEvent.click(button);
      waitFor(() => {
        expect(mockfn).toHaveBeenCalled();
      });
      waitFor(() => {
        expect(mockfn).toBeCalledTimes(1);
      });
    });
})


