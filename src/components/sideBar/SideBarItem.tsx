import React from "react";
import { NavLink } from "react-router-dom";

interface SideBarItemProps {
  barItem: {
    route: string;
    icon: any;
    title: string;
  };
}

const SideBarItem: React.FC<SideBarItemProps> = ({ barItem }) => {
  const defaultClass = ` flex w-full justify-start items-center gap-3 my-[2rem] pl-4 py-2 text-base hover:shadow-cardColor cursor-pointer transition-all duration-[200ms] ease-in-out transform hover:scale-[.98]`;

  return (
    <NavLink
      to={barItem.route}
      className={({ isActive }) =>
        isActive
          ? defaultClass +
            ` text-purple-400 border-r-4 border-purple-300 bg-[#f1ddf7]`
          : defaultClass
      }
    >
      {barItem.icon}

      <span className={`text-lg`}>{barItem.title}</span>
    </NavLink>
  );
};

export default SideBarItem;
