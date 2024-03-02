import { useState } from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import Cordinator from "./Cordinator";

const Tools = ({ project }) => {
  const [isCordinatorOpen, setIsConrdinator] = useState(false);
  return (
    <section className="w-full flex flex-col gap-4 ">
      <div className="w-[12%]">
        <h4 className="px-4  py-2 rounded-[24px] flex justify-center items-center text-white text-lg capitalize font-bold bg-[#66DC90] ">
          Tools Manager
        </h4>
      </div>
      <div className="flex items-center gap-4">
        <div
          onClick={() => setIsConrdinator(true)}
          className={`${
            project.coordinater ? "bg-[#FFFDF3]  text-[#FBBC09]" : ""
          } flex flex-col justify-center gap-2  w-[15%] h-[130px] cursor-pointer items-center p-2 rounded-md 
          } duration-300 ease-in-out`}
        >
          <GiBrain className="text-5xl" />
          <h5 className="text-center text-sm">Intelligent Coordinator</h5>
        </div>
        <div
          className={`${
            project.virtualRoom ? "text-[#66DC90] bg-[#F3FFF5] " : ""
          } flex flex-col justify-center   gap-2  w-[15%] h-[130px] cursor-pointer items-center p-2 rounded-md 
          } duration-300 ease-in-out `}
        >
          <FaPeopleRoof className="text-5xl" />
          <h5 className=" text-center  text-sm">Virtual Room</h5>
        </div>
      </div>
      {isCordinatorOpen && <Cordinator setConrdinator={setIsConrdinator} />}
    </section>
  );
};

export default Tools;
