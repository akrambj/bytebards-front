import { useEffect, useState } from "react";
import profile from "/imgs/manager/header/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import KanbanBoard from "./Kanban Board/KanbanBoard";

const Tasks = ({ project }) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  const [formData, setFormData] = useState({
    name: "",
    deadline: "26-02-2026",
  });

  const getTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${apiUrl}/projects/files?search=`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res, "res");
      if (res.status === 201) {
        const data = res.data.tasks;
        setTasks(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${apiUrl}/projects/${project.id}/tasks`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 201) {
        console.log("created", res);
        setLoading(false);
      } else {
        console.log("error");
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Drag and drop handlers
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDragEnter = (e, status) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Entering", status);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    addTask();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    // Update task status
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    console.log("Dropped into", status);
  };

  return (
    <section className="bg-Typo" >
      <KanbanBoard />
    </section>
  );
};

export default Tasks;
