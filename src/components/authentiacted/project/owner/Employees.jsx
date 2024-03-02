import { AiOutlineDelete } from "react-icons/ai";

const Employees = ({ employees }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {employees?.members?.map((Pers) => (
        <div
          key={Pers.id}
          className="flex items-center justify-center gap-5 border-b-[1px] border-b-Gray10 pb-4"
        >
          <div className="w-[60%]  text-[#A6BBD1] flex items-center gap-2">
            <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
              <img
                className="w-full h-full object-cover rounded-full"
                src={Pers.imageSrc}
                alt={Pers.firstName}
              />
            </div>
            <h4 className="text-[#0B3558] text-sm font-bold text-left">
              {Pers.firstName} {Pers.lastName}
            </h4>
          </div>
          <h4 className="w-[70%] text-[#0B3558] text-left">{Pers.email}</h4>
          <h4
            className="w-[22%]  text-[#0B3558] "
            style={{
              color: Pers.email === employees.manager ? "#7B6FC6" : "#66DC90",
            }}
          >
            {Pers.email === employees.manager
              ? (Pers.status = "manager")
              : "participant"}
          </h4>
          <h4
            style={{ color: Pers.role === "manager" ? "#7B6FC6" : "#66DC90" }}
            className="w-[30%] font-semibold capitalize"
          >
            {Pers.role}
          </h4>
          <h4 className="w-[20%]  text-[#0B3558] text-center ">
            {Pers.files}
          </h4>
          <h4 className="w-[30%]  text-[#0B3558] text-center">
            {Pers.tasks_done}
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
