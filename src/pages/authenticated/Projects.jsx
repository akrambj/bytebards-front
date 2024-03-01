import axios from "axios";
import { useEffect, useState } from "react";
import WorkspaceManager from "../../components/authentiacted/WorkspaceManager";
import AddProject from "../../components/authentiacted/projects/AddProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [addProject, setAddProject] = useState(false);

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  const getProjects = async () => {
    try {
      setLoading(true);
      const data = await axios.get(`${apiUrl}/projects/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      data?.data?.projects ? setProjects(data.data.projects) : [];

      console.log(token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="w-screen min-h-screen  flex flex-col  gap-3 ">
      <div className="flex items-center justify-between px-10">
        <h2 className="text-3xl font-bold text-[#0B3558]">My Projects</h2>
        <button
          className="bg-[#66DC90] text-white font-semibold px-4 py-2 rounded-lg"
          onClick={() => setAddProject(true)}
        >
          Add project
        </button>
      </div>
      <div className="flex min-h-screen items-center justify-center  mx-auto w-[95%] gap-4 flex-wrap">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            {projects?.map((project) => (
              <WorkspaceManager key={project.id} project={project} />
            ))}
          </>
        )}
      </div>
      {addProject && (
        <AddProject
          projects={projects}
          setProjects={setProjects}
          setAddProject={setAddProject}
        />
      )}
    </section>
  );
};

export default Projects;
