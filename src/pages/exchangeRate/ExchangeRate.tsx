import useCoins from "../../hooks/useCoins";
import Button from "../../components/Button";

function ExchangeRate() {
  const {
    coinList,
    setAmount,
    setSourceCurrency,
    setTargetCurrency,
    targetCurrency,
    sourceCurrency,
    result,
    handleCalculate,
    handleReset,
    amount,
    areAllFieldsFilled,
  } = useCoins();

  return (
    <div className="relative overflow-y-auto">
      <h1 className="text-lg font-semibold mt-4 md:mt-0">
        Currency Conversion Calculator
      </h1>
      <div className="flex flex-col bg-white p-[30px] md:w-[70%] w-[90%] mt-16 md:mt-24 mb-16 rounded-3xl mx-auto shadow-cardColor border border-[#8a66c4] text-black">
        <form className="flex flex-col md:gap-6 gap-2">
          <div className="flex  md:flex-row gap-4 flex-col-reverse justify-between">
            <label className=" font-semibold">
              Amount:
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter an amount e.g 12"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#8a66c4] outline-none md:w-full mt-2"
              />
            </label>
            <div className="font-extrabold">
              Result:
              <p className="mt-1 text-[#6232b0]">
                {typeof result === "number" ? result.toFixed(4) : result}
              </p>
            </div>
          </div>

          <div className="flex  md:flex-row gap-4 flex-col justify-between font-semibold">
            <label>
              Source Currency:
              <div className="flex flex-col p-2 shadow-cardColor border border-[#8a66c4] rounded-lg bg-gray-50 focus:border-[#8a66c4] outline-none cursor-pointer text-gray-900 font-normal mt-2">
                <select
                  value={sourceCurrency}
                  onChange={(e) => setSourceCurrency(e.target.value)}
                  className="outline-none bg-gray-50 cursor-pointer"
                >
                  <option value="">Select source currency</option>
                  {coinList !== undefined &&
                    coinList?.map((coin: any) => (
                      <option key={coin?.name} value={coin?.name}>
                        {coin?.name}
                      </option>
                    ))}
                </select>
              </div>
            </label>
            <label>
              Target Currency:
              <div className="flex flex-col p-2 shadow-cardColor border border-[#8a66c4] rounded-lg bg-gray-50 focus:border-[#8a66c4] outline-none cursor-pointer text-gray-900 font-normal mt-2">
                <select
                  value={targetCurrency}
                  onChange={(e) => setTargetCurrency(e.target.value)}
                  className="outline-none bg-gray-50 cursor-pointer"
                >
                  <option value="">Select target currency</option>
                  {coinList !== undefined &&
                    coinList?.map((coin: any) => (
                      <option key={coin?.name} value={coin?.name}>
                        {coin?.name}
                      </option>
                    ))}
                </select>
              </div>
            </label>
          </div>

          <div className="flex justify-between md:flex-row gap-4 ">
            <Button
              title={"Convert"}
              type="button"
              ariaLabel="exchange calculator button"
              className={`bg-[#3c009d] text-white p-3 rounded-2xl mx-auto mt-4 w-[40%] hover:scale-[.98]  transition ease-in duration-150 hover:bg-[#6232b0] ${!areAllFieldsFilled() && "bg-gray-600 cursor-not-allowed hover:bg-gray-600"}`}
              onClick={handleCalculate}
              disabled={!areAllFieldsFilled()}
            />
            <Button
              title={"Reset"}
              type="button"
              ariaLabel="Reset button"
              className="bg-[#3c009d] text-white p-3 rounded-2xl mx-auto mt-4 w-[40%] hover:scale-[.98]  transition ease-in duration-150 hover:bg-[#6232b0]"
              onClick={handleReset}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExchangeRate;
