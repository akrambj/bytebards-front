import FileStorage from "../owner/FileStorage";
import Head from "../owner/Head";
import Tasks from "../owner/Tasks";
import Tools from "../owner/Tools";

const ManagerProject = ({ project }) => {
  return (
    <div className="flex flex-col gap-10 px-[10vw]">
      <Head project={project} />
      <Tools project={project} />
      <Tasks project={project} />
      <FileStorage project={project} />
    </div>
  );
};

export default ManagerProject;
