import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const Input = ({
  type,
  placeholder,
  width,
  onChange,
  name,
  value,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative flex flex-col gap-3 mx-auto"
      style={{ width: width }}
    >
      <input
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66 border-2"
        required
      />
    </div>
  );
};

export default Input;
