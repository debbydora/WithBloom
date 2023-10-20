import { sideBarArr } from "../../utils/SideBarArray";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <div className="bg-[#FDF8FF] w-[20%] hidden fixed lg:block h-screen box-border py-[2rem] ">
      <div className="mt-10">
        {sideBarArr.map((barItem, index) => (
          <SideBarItem key={index} barItem={barItem} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
