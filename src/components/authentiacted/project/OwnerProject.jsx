import Head from "./owner/Head";
import Cards from "./owner/Cards";
import Statistics from "./owner/Statistics";
import Tools from "./owner/Tools";
import Tasks from "./owner/Tasks";
import FileStorage from "./owner/FileStorage";

const OwnerProject = ({ project, statistics }) => {
  return (
    <div className="flex flex-col gap-[13vh] px-[10vw]">
      <Head project={project} />
      <Cards project={project} statistics={statistics} />
      <Statistics project={project} />
      <Tools project={project} />
      <Tasks project={project} />
      <FileStorage project={project} />
    </div>
  );
};

export default OwnerProject;
