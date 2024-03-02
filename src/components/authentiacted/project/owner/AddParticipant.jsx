import axios from "axios";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const AddParticipant = ({ setAddParticipant, project }) => {
  const [formData, setFormData] = useState({
    email: "",
    status: "EMPLOYEE",
  });
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  const handleAddParticipant = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${apiUrl}/projects/members/${project.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 201) {
        setCreated(true);
        setLoading(false);
        setTimeout(() => {
          setCreated(false);
          setTimeout(() => {
            setAddParticipant(false);
          }, 1000);
        }, 3000);
      } else {
        console.log("error");
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddParticipant();
  };
  return (
    <div className="absolute right-0 top-12  py-4 h-[190px] px-2 bg-white drop-shadow-md shadow-md flex flex-col rounded-[20px] duration-300 justify-between z-50">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <h2 className="capitalize font-bold text-Typo text-[1.7rem]">
          Add Participant
        </h2>
        <IoMdClose
          className="text-2xl text-[#66DC90] cursor-pointer"
          onClick={() => setAddParticipant(false)}
        />
      </div>
      <div className="relative flex flex-col gap-2 w-[90%] mx-auto">
        {created && (
          <div className="bg-white drop-shadow-md shadow-md gap-2 py-4 px-10 flex items-center justify-center">
            <FaCheckCircle className="text-[#66DC90] " />
            <h4 className="text-[#66DC90] font-bold text-sm">
              project has been created successfully
            </h4>
          </div>
        )}
        <form className="flex items-center gap-10" onSubmit={handleSubmit}>
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            disabled={loading}
            className="px-2 w-[350px]  py-3 border-[1px] border-[#A6BBD18F] rounded-2xl"
            type="email"
            placeholder="Email Address"
            name="manager"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#66DC90] py-3 px-5 text-white font-bold rounded-lg"
          >
            {loading ? <div className="spinner"></div> : "Invite"}
          </button>
        </form>
        <h4 className="absolute right-[35%] bg-[#66DC9033] text-[#66DC90] px-2 py-1 rounded-md top-[20%]">
          Participant
        </h4>
      </div>
    </div>
  );
};

export default AddParticipant;
