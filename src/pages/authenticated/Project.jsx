import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OwnerProject from "../../components/authentiacted/project/OwnerProject";

const Project = () => {
  const [project, setProjects] = useState(null);
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
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          console.log(data, "data");
          setProjects(data);
          setLoading(false);
          console.log("projects", project);
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
  console.log(projectId);
  return (
    <section className="w-screen flex flex-col gap-10">
      {project && (
        <>
          {project.status === "OWNER" ? (
            <OwnerProject />
          ) : project.status === "MANAGER" ? (
            <div>ff</div>
          ) : (
            <div>dd</div>
          )}
        </>
      )}
    </section>
  );
};

export default Project;
