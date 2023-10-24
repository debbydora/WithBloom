import InputField from "../../components/InputField";
import useRegisteration from "../../hooks/useRegisteration";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Signup = () => {
  const { register, errors, handleSignup, handleSubmit, loading } =
    useRegisteration();
  const navigate = useNavigate();
  return (
    <div className="containerDiv h-[100vh] relative">
      <div className="flex flex-col bg-white p-[30px] md:w-[40%] w-[90%]  rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-[#3c009d] font-bold text-3xl text-center" role="heading">Sign up</p>
        <div className="w-[61px] h-[6px] bg-[#3c009d] rounded-lg flex mx-auto mt-3"></div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="w-full">
            <InputField
              label="Name"
              id="name"
              name="name"
              type="text"
              boldLabel="yes"
              placeholder="Enter Name"
              register={register}
              required={true}
              asteriks={true}
            />
            <small className="text-red-500 relative top-[-1rem] ">
              {errors.name?.message}
            </small>
          </div>
          <div className="w-full">
            <InputField
              label="Email Address"
              id="email"
              name="email"
              type="text"
              boldLabel="yes"
              placeholder="Enter email address"
              register={register}
              required={true}
              asteriks={true}
            />
            <small className="text-red-500 relative top-[-1rem] ">
              {errors.email?.message}
            </small>
          </div>
          <div className="w-full">
            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              boldLabel="yes"
              placeholder="Enter Password"
              register={register}
              required={true}
              asteriks={true}
            />
            <small className="text-red-500 relative top-[-1rem] ">
              {errors.password?.message}
            </small>
          </div>
        </div>
        <p className="text-center mt-4">
          Already a registered user?{" "}
          <span
            className="text-[#3c009d] font-bold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

        <Button
          title={loading? "Signing up ..." :"Sign up"}
          type="button"
          ariaLabel="Sign up button"
          className="bg-[#3c009d] text-white p-3 rounded-2xl mx-auto mt-8 w-[40%] hover:scale-[.98]  transition ease-in duration-150 hover:bg-[#6232b0]"
          onClick={handleSubmit(handleSignup)}
          role="submitsignup"
        />
      </div>
    </div>
  );
};

export default Signup;
