import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type InputProps = {
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  handleChange?: (e: any) => void;
  placeholder?: string;
  boldLabel?: string;
  required?: boolean;
  register?: any;
  asteriks?: boolean;
  className?: string;
  ariaRequired?: boolean;
};
const InputField = ({
  label,
  type,
  id,
  name,
  value,
  handleChange,
  placeholder,
  boldLabel,
  register,
  required,
  asteriks,
  className,
  ariaRequired,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e: {
    currentTarget: { contains: (arg0: Element | null) => any };
  }) => {
    if (!e.currentTarget.contains(document.activeElement)) {
      setFocused(false);
    }
  };

  function validateEmail(email: string) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id={id}
              name={name}
              value={value}
              onChange={handleChange}
              {...((register &&
                register(name, {
                  required: {
                    value: required,
                    message: `${label} is required`,
                  },
                })) ||
                {})}
              placeholder={placeholder}
              className="block w-full md:py-2 bg-gray-50 rounded-md focus:outline-none  sm:text-sm"
              aria-required={ariaRequired}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible color="#808080" size="24px" />
              ) : (
                <AiOutlineEye color="#808080" size="24px" />
              )}
            </div>
          </div>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            {...(register &&
              register(name, {
                required: {
                  value: required,
                  message: `${label} is required`,
                },
                validate: (fieldValue: string) => {
                  if (name === "email") {
                    return (
                      validateEmail(fieldValue) || "Enter a valid email address"
                    );
                  }
                },
              }))}
            placeholder={placeholder}
            aria-required={ariaRequired}
            className="block w-full py-2  text-[#9d7fce] bg-gray-50 focus:outline-none text-[12px]  "
          />
        );
    }
  };

  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      className={` mb-4 w-full bg-gray-50 h-[65px]  border-[0.1px] ${
        isFocused ? "border-[#8a66c4]" : "border-[#c4c1c1]"
      } rounded-md py-1 px-4 ${className ? className : " "}`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`flex ${
            boldLabel ? "text-[14px] font-[600]" : "text-[12px] font-[600]"
          }  ${
            asteriks && "after:content-['*'] after:text-red-300 after:ml-0.5"
          } text-[#444448] `}
        >
          {label}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default InputField;
