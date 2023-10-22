import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRegisteration = () => {
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "all",
  });
  const { errors } = formState;

  const handleReset = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("password", "");
  };

  const handleResponse = (errorCode: any) => {
    let specificErrorCode;
    if (errorCode) {
      const parts = errorCode.split("/");
      if (parts.length === 2) {
        specificErrorCode = parts[1];
      }
    }
    return toast.error(specificErrorCode, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSignup = (data: any, e: any) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (res) => {
        await updateProfile(res?.user, {
          displayName: data.name,
        });
        setLoading(false);
        if (res?.user.email !== "") {
          toast.info("Signup successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/login");
        }
        handleReset();
      })
      .catch((err) => {
        setLoading(false);
        handleResponse(err?.code);
        handleReset();
      });
  };

  const handleLogin = (data: any, e: any) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        setLoading(false);
        if (res?.user.email !== "") {
          navigate("/dashboard");
        }
        handleReset();
      })
      .catch((err) => {
        setLoading(false);
        handleResponse(err.code);
        handleReset();
      });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleSignup,
    handleLogin,
    loading,
    handleLogout,
  };
};

export default useRegisteration;
