import React, { useEffect, useState } from "react";

const useCoins = () => {
  const [coinList, setCoinList] = useState<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [filteredCoinList, setFilteredCoinList] = useState<any>();
  const [loading, setLoading] = useState(false);

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

  return {
    coinList,
    onChange,
    searchQuery,
    onFilterSelect,
    selectedCoin,
    filteredCoinList,
    loading,
  };
};

export default useCoins;
