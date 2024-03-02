import { MdKeyboardArrowDown } from "react-icons/md";
import Employees from "./Employees";

const EmployeesActivity = ({ project }) => {
  return (
    <div className="w-[72%] p-10 flex flex-col gap-7 bg-white rounded-[16px] drop-shadow-card">
      <div className="rounded-t-[16px] bg-[#FFA587] h-[5%] w-[100%] absolute top-0 left-0"></div>
      <div className="flex items-center justify-between">
        <h2 className="capitalize font-bold text-Typo text-[1.5rem]">
          Employees Activity
        </h2>
        <div className="flex items-center gap-5">
          <button className="border-[#A6BBD1] text-[1rem] flex items-center gap-1 px-4 py-1 rounded-lg border-[1px] text-[#0B3558]">
            All Data <MdKeyboardArrowDown />
          </button>
          <button className="border-[#A6BBD1] text-[1rem] flex items-center gap-1 px-4 py-1 rounded-lg border-[1px] text-[#0B3558]">
            2024 <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-centers gap-5 border-b-[1px] border-b-Gray100 pb-4">
        <h4 className="w-[60%]  text-[#0B3558] text-[0.8rem]">Name</h4>
        <h4 className="w-[70%]  text-[#0B3558] text-[0.8rem]">Email</h4>
        <h4 className="w-[30%]  text-[#0B3558] text-[0.8rem]">Role</h4>
        <h4 className="w-[22%]  text-[#0B3558] text-[0.8rem]">Activity</h4>
        <h4 className="w-[20%]  text-[#0B3558] text-[0.8rem]">Files</h4>
        <h4 className="w-[30%]  text-[#0B3558] text-[0.8rem]">Tasks Done</h4>
        <h4 className="w-[30%] text-center text-[#0B3558]">Action</h4>
      </div>
      <Employees employees={project} />
    </div>
  );
};

export default EmployeesActivity;
