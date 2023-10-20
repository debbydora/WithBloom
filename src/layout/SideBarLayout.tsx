import ProfileHeader from "../components/ProfileHeader";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

const SideBarLayout = () => {
  return (
    <>
      <div className="w-full">
        <div className="fixed w-full z-20 flex flex-col top-0">
          <ProfileHeader />
        </div>
        <div className="flex mt-[4rem]">
          <SideBar />
          <div className={`lg:ml-[20%] w-full md:p-4 mt-10 px-6`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarLayout;
