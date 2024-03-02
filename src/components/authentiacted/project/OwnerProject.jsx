import Head from "./owner/Head";
import Cards from "./owner/Cards";
import Statistics from "./owner/Statistics";
import Tools from "./owner/Tools";
import Tasks from "./owner/Tasks";
import FileStorage from "./owner/FileStorage";

const OwnerProject = ({ project }) => {
  return (
    <div className="flex flex-col gap-10 px-16">
      <Head project={project} />
      <Cards project={project} />
      <Statistics project={project} />
      <Tools project={project} />
      <Tasks project={project} />
      <FileStorage project={project} />
    </div>
  );
};

export default OwnerProject;
