import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Input from "../../UI/Input";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState(false);

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${apiUrl}/auth/register`, formData);
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.token);
        setLoading(false);
        setCreated(true);
        navigate("/avatar");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (confirm === formData.password) {
      setConfirmError(false);
    } else {
      setConfirmError(true);
    }
  }, [confirm, formData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateAccount();
  };
  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-2  p-2 z-50">
      <div
        className={`${
          error ? "left-0 opacity-100" : "-left-10 opacity-0"
        } bg-red-500 absolute w-[300px] transition-all duration-300 top-0 text-white py-2 px-4 `}
      >
        {error}
      </div>

      <div
        className={`${
          created ? "left-0 opacity-100" : "-left-10 opacity-0"
        } absolute transition-all duration-300 top-0 bg-white drop-shadow-md shadow-md gap-2 py-4 px-10 flex items-center justify-center`}
      >
        <FaCheckCircle className="text-[#66DC90]" />
        <h4 className="text-[#66DC90] font-bold text-sm">
          user has been created successfully
        </h4>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="flex gap-[12px] flex-col w-[49%]">
          <p className="font-medium text-Typo">First Name</p>
          <Input
            value={formData.firstName}
            name="firstName"
            onChange={handleChange}
            label="First name"
            type="text"
            placeholder="First name"
            width="100%"
            display={"none"}
            disabled={loading}
          />
        </div>
        <div className="flex gap-[12px] flex-col w-[49%]">
          <p className="font-medium text-Typo">Last Name</p>
          <Input
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
            label="Last name"
            type="text"
            placeholder="Last name"
            width="100%"
            display={"none"}
            disabled={loading}
          />
        </div>
      </div>
      <div className="flex gap-[12px] flex-col w-[100%]">
        <p className="font-medium text-Typo">Email</p>
        <Input
          value={formData.email}
          name="email"
          onChange={handleChange}
          label="E-mail"
          type="email"
          placeholder="Email Adress"
          width="100%"
          display={"none"}
          disabled={loading}
        />
      </div>
      <div className="flex gap-[12px] flex-col w-[100%]">
        <p className="font-medium text-Typo">Password</p>
        <Input
          value={formData.password}
          name="password"
          onChange={handleChange}
          label="Password"
          type="password"
          placeholder="Password"
          width="100%"
          disabled={loading}
        />
      </div>
      <div className="relative flex gap-[12px] flex-col w-[100%]">
        <div className="flex justify-between items-center">
          <p className="font-medium text-Typo">Confirm Password</p>
          {confirmError && (
            <div className="bg-red-100 text-red-500 font-medium py-2 px-4 rounded-[24px]">
              Passwords do not match
            </div>
          )}
        </div>
        <Input
          label="Confirm Password"
          type="password"
          value={confirm}
          placeholder="Confirm Password"
          width="100%"
          disabled={loading}
          onChange={(e) => {
            setConfirm(e.target.value);
            if (e.target.value === "") {
              setConfirmError(false);
            }
          }}
        />
      </div>
      <button className=" w-[100%] mx-auto h-[7vh] bg-Green100 rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center">
        {loading ? <div className="spinner "></div> : "Connexion"}
      </button>
    </form>
  );
};

export default RegisterForm;
