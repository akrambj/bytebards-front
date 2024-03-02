import { useState } from "react";
import groups from "/imgs/services/groups.png";
import { IoIosAdd } from "react-icons/io";
import AddParticipant from "./AddParticipant";

const Head = ({ project }) => {
  const [addParticipant, setAddParticipant] = useState(false);

  return (
    <div className="flex items-center justify-between ">
      <h2 className="text-4xl capitalize text-[#0B3558] font-bold">
        {project.name}
      </h2>
      <div className="relative flex items-center -gap-5">
        {project?.members?.map((member) => (
          <img
            className="w-[50px] h-[50px] rounded-full"
            key={member.email}
            src={member.imageSrc}
            alt={member.firstname}
          />
        ))}
        {project.status === "OWNER" && (
          <>
            <div
              className=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#A6BBD1] cursor-pointer"
              onClick={() => setAddParticipant(!addParticipant)}
            >
              <IoIosAdd className="text-white text-2xl" />
            </div>
            {addParticipant && (
              <AddParticipant
                project={project}
                setAddParticipant={setAddParticipant}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Head;
