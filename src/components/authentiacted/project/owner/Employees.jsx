import { AiOutlineDelete } from "react-icons/ai";

const Employees = ({ employees }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {employees?.members?.map((khedam) => (
        <div
          key={khedam.id}
          className="flex items-center justify-center gap-5 border-b-[1px] border-b-[#0B3558] pb-4"
        >
          <div className="w-[60%]  text-[#0B3558] flex items-center gap-2">
            <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src={khedam.imageSrc}
                alt={khedam.firstName}
              />
            </div>
            <h4 className="text-[#0B3558] text-sm font-bold text-left">
              {khedam.firstName} {khedam.lastName}
            </h4>
          </div>
          <h4 className="w-[70%] text-[#0B3558] text-left">{khedam.email}</h4>
          <h4
            className="w-[22%]  text-[#0B3558] "
            style={{
              color: khedam.email === employees.manager ? "#7B6FC6" : "#66DC90",
            }}
          >
            {khedam.email === employees.manager
              ? (khedam.status = "manager")
              : "participant"}
          </h4>
          <h4
            style={{ color: khedam.role === "manager" ? "#7B6FC6" : "#66DC90" }}
            className="w-[30%] font-semibold capitalize"
          >
            {khedam.role}
          </h4>
          <h4 className="w-[20%]  text-[#0B3558] text-center ">
            {khedam.files}
          </h4>
          <h4 className="w-[30%]  text-[#0B3558] text-center">
            {khedam.tasks_done}
          </h4>
          <div className="w-[30%]  text-[#0B3558]  flex items-center justify-center gap-2">
            <AiOutlineDelete className="text-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
