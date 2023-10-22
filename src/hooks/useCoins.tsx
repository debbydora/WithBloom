import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCoins = () => {
  const [coinList, setCoinList] = useState<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [filteredCoinList, setFilteredCoinList] = useState<any>();
  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState<string>("");
  const [sourceCurrency, setSourceCurrency] = useState<string>("");
  const [targetCurrency, setTargetCurrency] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const url = `${import.meta.env.VITE_BASEURL}/currency/rate`;

  const getCoins = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.success === true) {
        let dataArr = data?.data?.rates;
        if (dataArr) {
          const result = Object.keys(dataArr).map((key) => ({
            name: key,
            rate: dataArr[key].rate,
          }));
          setCoinList(result);
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    const filteredListByCoin = selectedCoin
      ? coinList?.filter((coin: any) => coin.name === selectedCoin)
      : coinList;

    const filteredListBySearch = filteredListByCoin?.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCoinList(filteredListBySearch);
  }, [selectedCoin, searchQuery, coinList]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const onFilterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(e.target.value);
  };

  const handleCalculate = () => {
    const numericAmount = Number(amount);

    if (isNaN(numericAmount)) {
      toast.info("Please enter a valid number for the amount", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setAmount("")
      setResult(0);
      return;
    }

    const rateA = coinList.find(
      (coin: any) => coin.name === sourceCurrency
    )?.rate;
    const rateB = coinList.find(
      (coin: any) => coin.name === targetCurrency
    )?.rate;

    if (rateA !== undefined && rateB !== undefined) {
      const convertedAmount = (numericAmount / rateA) * rateB;
      setResult(convertedAmount);
    } else {
      setResult(0);
      toast.info("Invalid source or target currency", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

   const handleReset = () => {
     setAmount("");
     setSourceCurrency("");
     setTargetCurrency("");
     setResult(0);
   };

  return {
    coinList,
    onChange,
    searchQuery,
    onFilterSelect,
    selectedCoin,
    filteredCoinList,
    loading,
    setAmount,
    setSourceCurrency,
    setTargetCurrency,
    result,
    handleCalculate,
    handleReset,
    targetCurrency,
    sourceCurrency,
    amount
  };
};

export default useCoins;
