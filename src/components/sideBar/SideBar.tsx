import useRegisteration from "../../hooks/useRegisteration";
import { sideBarArr } from "../../utils/SideBarArray";
import SideBarItem from "./SideBarItem";
import {FaSignOutAlt} from "react-icons/fa"

const SideBar = () => {
  const {handleLogout} = useRegisteration()
  return (
    <div className="bg-[#FDF8FF] w-[20%] hidden fixed lg:block h-screen box-border py-[2rem] ">
      <div className="mt-10">
        {sideBarArr.map((barItem, index) => (
          <SideBarItem key={index} barItem={barItem} />
        ))}
      </div>
      <div
        className="flex items-center gap-2 pl-4 font-semibold  md:mt-[5rem] cursor-pointer text-red-400"
        onClick={handleLogout}
      >
        <FaSignOutAlt size="20" />
        <p className="text-red-400">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
