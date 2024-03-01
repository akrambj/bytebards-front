import Head from "./manager/Head";
import Cards from "./manager/Cards";
import Statistics from "./manager/Statistics";
import Tools from "./manager/Tools";
import Tasks from "./manager/Tasks";
import FileStorage from "./manager/FileStorage";

const OwnerProject = () => {
  return (
    <div className="flex flex-col gap-10 px-16">
      <Head />
      <Cards />
      <Statistics />
      <Tools />
      <Tasks />
      <FileStorage />
    </div>
  );
};

export default OwnerProject;
