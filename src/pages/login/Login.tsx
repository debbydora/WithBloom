import useRegisteration from "../../hooks/useRegisteration";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, errors, handleLogin, handleSubmit, loading } =
    useRegisteration();
  const navigate = useNavigate();
  return (
    <div className="containerDiv h-[100vh] relative">
      <div className="flex flex-col bg-white p-[30px] md:w-[40%] w-[90%]  rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-[#3c009d] font-bold text-3xl text-center">Log in</p>
        <div className="w-[61px] h-[6px] bg-[#3c009d] rounded-lg flex mx-auto mt-3"></div>
        <div className="flex flex-col gap-2 mt-8">
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
          Don't have an account?{" "}
          <span
            className="text-[#3c009d] font-bold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
        <Button
          title={loading ? "Logging in..." : "Login"}
          type="submit"
          ariaLabel="log in button"
          className="bg-[#3c009d] text-white p-3 rounded-2xl mx-auto mt-4 w-[40%] hover:scale-[.98]  transition ease-in duration-150 hover:bg-[#6232b0]"
          onClick={handleSubmit(handleLogin)}
        />
      </div>
    </div>
  );
};

export default Login;
