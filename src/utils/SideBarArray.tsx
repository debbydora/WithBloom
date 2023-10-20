import { BsCoin } from "react-icons/bs";
import { RiExchangeCnyFill } from "react-icons/ri";

export const sideBarArr = [
  {
    icon: <BsCoin size="25px" />,
    title: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: <RiExchangeCnyFill size="25px" />,
    title: "Exchange Rate",
    route: "/exchange-rate",
  },
];
