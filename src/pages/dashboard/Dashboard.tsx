import CoinCard from "../../components/CoinCard";
import Spinner from "../../components/Spinner";
import useCoins from "../../hooks/useCoins";

const Dashboard = () => {
  const {
    coinList,
    onChange,
    searchQuery,
    selectedCoin,
    onFilterSelect,
    filteredCoinList,
    loading,
  } = useCoins();

  return (
    <>
      <div className="flex flex-col gap-6 pb-6">
        <p className="text-lg font-extrabold mt-4 md:mt-0">All Coins</p>
        <div className="flex flex-col md:flex-row justify-between gap-y-6">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative md:w-[100%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#8a66c4] outline-none"
                placeholder="Search coins..."
                value={searchQuery}
                onChange={onChange}
              />
            </div>
          </form>
          <div className="flex justify-between items-center gap-x-4">
            <p className="font-medium">Filter</p>
            <div className="flex flex-col p-4 w-[100%] shadow-cardColor border border-[#8a66c4] rounded-lg bg-gray-50 focus:border-[#8a66c4] outline-none cursor-pointer ">
              <select
                value={selectedCoin}
                onChange={onFilterSelect}
                className="outline-none bg-gray-50 cursor-pointer"
              >
                <option value="">All Coins</option>
                {coinList !== undefined &&
                  coinList?.map((coin: any) => (
                    <option key={coin.name} value={coin.name}>
                      {coin.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:gap-2 md:gap-x-14 gap-2">
          {loading ? (
            <div className="absolute left-1/2 top-1/2">
              <Spinner />
            </div>
          ) : (
            <>
              {filteredCoinList !== undefined &&
                filteredCoinList?.map((coin: any) => (
                  <CoinCard
                    coin={coin?.name}
                    rate={coin?.rate}
                    key={coin?.name}
                  />
                ))}
            </>
          )}
        </div>
        {/* //////////////////////////////////// */}
      </div>
    </>
  );
};

export default Dashboard;
