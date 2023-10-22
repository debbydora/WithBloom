    type CoinCardProps = {
      coin: string;
      rate: any;
    };

const CoinCard = ({coin,rate}:CoinCardProps) => {

  return (
    <>
      <div className="flex flex-col gap-x-4 bg-white font-quicksand md:w-[250px] h-[70px] p-2 rounded-lg shadow-cardColor border border-[#8a66c4] hover:scale-[.98] text-[#8f5be3] transition ease-in-out duration-300 mt-2">
        <p className="font-extrabold text-lg">{coin}</p>
        <p className="font-medium">{parseFloat(rate).toFixed(2)}</p>
      </div>
    </>
  );
}

export default CoinCard
