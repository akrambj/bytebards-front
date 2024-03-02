import axios from "axios";
import { useEffect, useState } from "react";
import AddProject from "../../components/authentiacted/projects/AddProject";
import ProjectCard from "../../components/authentiacted/ProjectCard";

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
    <section className="w-screen min-h-screen  flex flex-col  gap-[5vh] my-[20vh]">
      <div className="flex items-center justify-between px-[10vw]">
        <h2 className="text-[2.5rem] font-bold text-Typo">My Projects</h2>
        <button
          className="bg-Green100 text-white font-semibold px-[24px] py-[16px] rounded-[12px]"
          onClick={() => setAddProject(true)}
        >
          Add project
        </button>
      </div>
      <div className="flex min-h-screen items-center w-[80vw] mx-auto justify-between flex-wrap gap-y-16">
        {loading ? (
          <div className="spinner mx-auto"></div>
        ) : (
          <div className=" w-full h-[50vh] text-2xl capitalize font-bold">
            {projects.length === 0 ? (
              <h2 className="text-center">there are no projects</h2>
            ) : (
              <>
                {projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </>
            )}
          </div>
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
