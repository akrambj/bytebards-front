import EmployeesActivity from "./EmployeesActivity";
import TaskStatistics from "./TaskStatistics";

const Statistics = ({ project }) => {
  return (
    <section className="w-full flex justify-between">
      <TaskStatistics project={project} />
      <EmployeesActivity project={project} />
    </section>
  );
};

export default Statistics;
