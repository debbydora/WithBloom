import React, { useContext } from "react";
import Harmburger from "./Harmburger";
import { sideBarArr } from "../utils/SideBarArray";
import SideBarItem from "./sideBar/SideBarItem";
import { AuthContext } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import useRegisteration from "../hooks/useRegisteration";

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useContext(AuthContext)
  const {handleLogout} = useRegisteration()

  const toggle = () => setIsOpen(!isOpen);

  const hide = () => setIsOpen(false);
  return (
    <>
      <div className="flex flex-row justify-between sticky z-50 lg:px-20 px-8 py-4 w-full font-quicksand bg-headerbg">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-purple-400 font-bold md:text-4xl text-lg">
            withBloom
          </h1>
          <div className="mr-10 md:mr-10 mt-1 md:mt-0">
            <p className="text-sm font-light">Welcome</p>
            <p className="text-sm font-bold">{user.displayName}</p>
          </div>
        </div>

        <div className="absolute right-4 top-4 md:top-6 cursor-pointer lg:hidden md:block">
          <Harmburger onClick={toggle} isOpen={isOpen} />
        </div>
        <div
          onClick={hide}
          className={`${
            isOpen ? "translate-x-0" : "translate-x-[-100vw]"
          } fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center cursor-pointer overflow-y-auto lg:hidden`}
        >
          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-[-100vw]"
            } flex flex-col gap-y-4 absolute z-50 top-0 left-0 right-0 w-[50%]  transition duration-[600ms]  lg:hidden `}
          >
            <div className="bg-headerbg h-screen">
              <p
                onClick={hide}
                className="text-black text-2xl my-2 mx-2 flex justify-end font-bold"
              >
                X
              </p>

              <div className="my-[2rem]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
