import { useNavigate } from "react-router-dom";
import groups from "/imgs/services/groups.png";
const WorkspaceManager = ({ project }) => {
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
      className="cursor-pointer w-[30%] bg-[#FCFCFD] drop-shadow-md shadow-md h-[240px] rounded-lg flex flex-col"
    >
      <div
        style={{ backgroundColor: bg }}
        className={`w-full h-[10%]  rounded-t-lg`}
      ></div>
      <div className="flex flex-col gap-5 w-full h-[90%] p-5">
        <div className="flex items-center justify-between px-10">
          {/* <h3 className="bg-[#FFF4F4] text-[#F1511B] p-2">
            deadline in  days
          </h3> */}
        </div>
        <h2 className="text-2xl font-bold">{project?.name}</h2>
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

export default WorkspaceManager;
