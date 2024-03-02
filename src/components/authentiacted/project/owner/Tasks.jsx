import { useEffect, useState } from "react";
import profile from "/imgs/manager/header/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";

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
    <section className="flex flex-col gap-4">
      <div className="flex items-center">
        <h4 className="px-4  py-2 rounded-[24px] flex justify-center items-center text-white text-lg capitalize font-bold bg-[#BFB7F1]">
          Task Manager
        </h4>
        <button className="px-6 py-1 rounded-xl rounded-l-none bg-[#E5E2F9] text-[#0B3558] flex items-center gap-2 ">
          <img src={profile} className="w-8" alt="" />
          <h4 className="font-bold">karim</h4>
          <MdKeyboardArrowDown />
        </button>
      </div>
      <div className="flex flex-col h-[300px] justify-between ">
        <div className="flex items-center px-5 gap-4">
          {[
            "New",
            "Product Backlog",
            "Sprint Backlog",
            "In Progress",
            "Done",
          ].map((status) => (
            <h5
              key={status}
              className="w-[20%] text-[#0B3558] font-bold"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, status)}
              onDragEnter={(e) => handleDragEnter(e, status)}
            >
              {status}
            </h5>
          ))}
        </div>
        <div className="flex items-center">
          {tasks.map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
              className="flex flex-col gap-4 w-[20%] px-4"
            >
              <div
                className={`px-5 py-2 bg-[${task.color}] w-[130px] text-white rounded-lg`}
              >
                {task.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center px-5 gap-4">
          {[
            "New",
            "Product Backlog",
            "Sprint Backlog",
            "In Progress",
            "Done",
          ].map((status) => (
            <form
              onSubmit={handleDragOver}
              className="flex items-center gap-3"
              key={status}
            >
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                key={status}
                className="w-[20%] text-[#0B3558] font-bold"
                placeholder="Add Task... "
              />
              <button>add</button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
