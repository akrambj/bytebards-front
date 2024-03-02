import { CgNotes } from "react-icons/cg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFilePdf } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
const FileStorage = ({ project }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [link, setLink] = useState("");

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  const getFiles = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `${apiUrl}/projects/${project.id}/storage/public`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data, "dataddddd");
      data?.data?.files ? setFiles(data.data.files) : [];

      console.log(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  const addFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        `${apiUrl}/projects/${project.id}/storage/public`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Specify content type as multipart/form-data
          },
        }
      );
      if (res.status === 200) {
        console.log("File uploaded successfully");
        // Refresh the file list
        getFiles();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.files[0]; // Get the selected file
    addFile(file); // Pass the file to the addFile function
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center">
        <h4 className="px-6 py-2 rounded-lg bg-[#00ADEF] text-white">
          Storage Manager
        </h4>
        <button className="px-6 py-3 rounded-xl rounded-l-none bg-[#E5E2F9] text-[#0B3558] flex items-center gap-2 ">
          <CgNotes className="text-[#00ADEF]" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-10">
        <div className="w-[45%] h-[300px] flex flex-col  gap-10">
          <div className="flex items-center justify-between">
            <h4 className="text-[#0B3558] font-bold text-xl">Public Storage</h4>
            <input
              type="file"
              className="hidden"
              id="fileInput"
              onChange={handleSubmit} // Pass handleSubmit here
            />
            <label
              htmlFor="fileInput"
              className="bg-[#66DC90] py-2 rounded-lg text-white placeholder:text-white font-bold w-[150px] text-center cursor-pointer"
            >
              Upload Files
            </label>
          </div>
          <div className="flex  items-center flex-wrap gap-[20px]">
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#00ADEF]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#00ADEF]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#00ADEF]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#00ADEF]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#00ADEF]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] h-[300px] flex flex-col  gap-10">
          <div className="flex items-center justify-between">
            <h4 className="text-[#0B3558] font-bold text-xl">
              Private Storage
            </h4>
            <button className="bg-[#66DC90] py-2 px-4 rounded-lg text-white font-bold">
              Upload Files
            </button>
          </div>
          <div className="flex  items-center flex-wrap gap-[20px]">
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileStorage;
