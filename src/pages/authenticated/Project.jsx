import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OwnerProject from "../../components/authentiacted/project/OwnerProject";
import ManagerProject from "../../components/authentiacted/project/manageer/ManagerProject";
import EmployeeProject from "../../components/authentiacted/project/employees/EmployeeProject";

const Project = () => {
  const [project, setProjects] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [addProject, setAddProject] = useState(false);
  const { projectId } = useParams();

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiUrl}/projects/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 201) {
          const data = res.data.project;
          setProjects(data);
          setLoading(false);
        } else {
          setError("error");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  const getStatistics = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/projects/statistics/${project.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        const data = res.data.statistics;
        setStatistics(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);
  return (
    <section className="w-screen flex flex-col gap-10 my-[20vh]">
      {project && (
        <>
          {project.status === "OWNER" ? (
            <OwnerProject project={project} statistics={statistics} />
          ) : project.status === "MANAGER" ? (
            <ManagerProject project={project} statistics={statistics} />
          ) : (
            <EmployeeProject project={project} statistics={statistics} />
          )}
        </>
      )}
    </section>
  );
};

export default Project;
