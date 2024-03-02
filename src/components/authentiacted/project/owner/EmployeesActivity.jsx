import { MdKeyboardArrowDown } from "react-icons/md";
import Employees from "./Employees";

const EmployeesActivity = ({ project }) => {
  return (
    <div className="w-[72%] px-2 py-5 flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl capitalize font-bold text-[#0B3558]">
          Employees Activity
        </h2>
        <div className="flex items-center gap-5">
          <button className="border-[#A6BBD1] flex items-center gap-1 px-4 py-1 rounded-lg border-[1px] text-[#0B3558]">
            All Data <MdKeyboardArrowDown />
          </button>
          <button className="border-[#A6BBD1] flex items-center gap-1 px-4 py-1 rounded-lg border-[1px] text-[#0B3558]">
            2024 <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-centers gap-5 border-b-[1px] border-b-[#0B3558] pb-4">
        <h4 className="w-[60%]  text-[#0B3558]">Name</h4>
        <h4 className="w-[70%]  text-[#0B3558]">Email</h4>
        <h4 className="w-[30%]  text-[#0B3558]">Role</h4>
        <h4 className="w-[22%]  text-[#0B3558]">Activity</h4>
        <h4 className="w-[20%]  text-[#0B3558]">Files</h4>
        <h4 className="w-[30%]  text-[#0B3558]">Tasks Done</h4>
        <h4 className="w-[30%] text-center text-[#0B3558]">Action</h4>
      </div>
      <Employees employees={project} />
    </div>
  );
};

export default EmployeesActivity;
