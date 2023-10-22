import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";

const NotFound = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNotFound = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
    return (
      <div className="containerDiv h-[100vh] relative">
        <div className="flex flex-col bg-white p-[30px] md:w-[40%] w-[90%]  rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center text-center gap-3">
          <h1 className="text-[#3c009d] font-extrabold text-6xl">OOPS!</h1>
          <h1 className="text-[#3c009d] font-extrabold text-4xl">
            PAGE NOT FOUND
          </h1>
          <h2 className="text-[#9d7fce] font-extrabold text-xl">
            Sorry, the page you are looking for does not exist.
          </h2>
          <Button
            onClick={handleNotFound}
            title={user ? "Return Home" : "Return to Login"}
            type="button"
            ariaLabel={user? "Home navigate button": "login navigate button"}
            className="bg-[#3c009d] text-white text-sm p-3 rounded-2xl mx-auto mt-4 hover:scale-[.98] transition ease-in duration-150 hover:bg-[#6232b0] whitespace-nowrap text-center"
          />
        </div>
      </div>
    );
};

export default NotFound;
