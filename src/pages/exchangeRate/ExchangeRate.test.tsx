import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../Firebase";
import { MemoryRouter } from "react-router-dom";
import ExchangeRate from "./ExchangeRate";

initializeApp(firebaseConfig);

describe("Exchangerate", () => {
    
  it("should handleCalculate correctly", () => {
    const mockfn = vi.fn();
    render(
      <MemoryRouter>
        <ExchangeRate />
      </MemoryRouter>
    );

    const amountInput = screen.getByLabelText("Amount:");
    fireEvent.change(amountInput, { target: { value: "10" } });
    const sourceCurrencyInput = screen.getByLabelText("Source Currency:");
    fireEvent.change(sourceCurrencyInput, { target: { value: "BTC" } });
    const targetCurrencyInput = screen.getByLabelText("Target Currency:");
    fireEvent.change(targetCurrencyInput, { target: { value: "USD" } });
    const convertButton = screen.getByText("Convert");
    fireEvent.click(convertButton);

    const errorMessage = screen.queryByText(
      /Please\senter\sa\svalid\snumber\sfor\sthe\samount/i
    );
    expect(errorMessage).not.toBeInTheDocument();

    waitFor(() => {
      expect(mockfn).toHaveBeenCalled();
    });
    waitFor(() => {
      expect(mockfn).toBeCalledTimes(1);
    });
  });

  it("should not handleCalculate with invalid input", () => {
    render(
      <MemoryRouter>
        <ExchangeRate />
      </MemoryRouter>
    );
    const amountInput = screen.getByLabelText("Amount:");
    fireEvent.change(amountInput, { target: { value: "invalid" } });
    const convertButton = screen.getByText("Convert");
    fireEvent.click(convertButton);

    const errorMessage = screen.findByText(
      /Please\senter\sa\svalid\snumber\sfor\sthe\samount/i
    );
    expect(errorMessage).toBeTruthy();
  });

    it("should handleReset correctly", () => {
      render(
        <MemoryRouter>
          <ExchangeRate />
        </MemoryRouter>
      );

      const amountInput = screen.getByLabelText("Amount:");
      fireEvent.change(amountInput, { target: { value: "10" } });
      const sourceCurrencyInput = screen.getByLabelText("Source Currency:");
      fireEvent.change(sourceCurrencyInput, { target: { value: "USD" } });
      const targetCurrencyInput = screen.getByLabelText("Target Currency:");
      fireEvent.change(targetCurrencyInput, { target: { value: "EUR" } });
      const resetButton = screen.getByText("Reset");
      fireEvent.click(resetButton);

      expect(amountInput).toHaveValue("");
      expect(sourceCurrencyInput).toHaveValue("");
      expect(targetCurrencyInput).toHaveValue("");
    });

    it("should disable Convert button when fields are not filled", () => {
      render(
        <MemoryRouter>
          <ExchangeRate />
        </MemoryRouter>
      );

      const amountInput = screen.getByLabelText("Amount:");
      fireEvent.change(amountInput, { target: { value: "" } });
      const sourceCurrencyInput = screen.getByLabelText("Source Currency:");
      fireEvent.change(sourceCurrencyInput, { target: { value: "" } });
      const targetCurrencyInput = screen.getByLabelText("Target Currency:");
      fireEvent.change(targetCurrencyInput, { target: { value: "" } });

      const convertButton = screen.getByText("Convert");

      expect(convertButton).toBeDisabled();
    });
});
