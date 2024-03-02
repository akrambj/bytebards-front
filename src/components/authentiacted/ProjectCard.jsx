import { useNavigate } from "react-router-dom";
import groups from "/imgs/services/groups.png";

const ProjectCard = ({ project }) => {

  const getColor = () => {
    let backgroundColor = "#FCFCFD";
    if (project.status === "EMPLOYEE") {
      backgroundColor = "#66DC90";
    } else if (project.status === "MANAGER") {
      backgroundColor = "#BFB7F1";
    } else if (project.status === "OWNER") {
      backgroundColor = "#F1B7B7";
    }
    return backgroundColor;
  };

  const navigate = useNavigate();

  const handleNaviagtion = () => {
    navigate(`projects/${project.id}`);
  };

  const [day, month, year] = project.deadline.split("-").map(Number);
  const jsDate = new Date(year, month - 1, day);
  const deadline = Date.now() - jsDate.getTime();

  console.log("g");

  const bg = getColor();

  return (
    <div
      onClick={handleNaviagtion}
      className="cursor-pointer w-[25vw] bg-[#FCFCFD] drop-shadow-card h-[286px] rounded-[14px] flex flex-col"
    >
      <div
        style={{ backgroundColor: bg }}
        className={`w-full h-[10%]  rounded-t-[14px]`}
      ></div>
      <div className="flex flex-col gap-5 w-full h-[90%] p-5 pl-10">
        <div className="flex items-center justify-between px-10">
          {/* <h3 className="bg-[#FFF4F4] text-[#F1511B] p-2">
            deadline in  days
          </h3> */}
        </div>
        <h2 className="text-[1.5rem] font-bold">{project?.name}</h2>
        <div className="flex items-center gap-5">
          <img src={groups} alt="" />
          <h5 className="font-semibold text-[#476788]">
            {project?.members.length}{" "}
            {project?.members.length === 1
              ? "participant"
              : project?.members.length === 0
              ? "no participants"
              : "participants"}
          </h5>
        </div>
        <h4
          style={{ backgroundColor: bg }}
          className={`w-[120px]  text-center capitalize font-bold py-2 rounded-xl text-white`}
        >
          {project.status}
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
