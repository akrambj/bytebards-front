import { useState } from "react";
import Polygon from "../../components/home/avatar/Polygon";

const Avatar = () => {
  const [color, setColor] = useState(0);
  const colors = [
    { bg: "#66DC90", border: "#299D53" },
    { bg: "#ACD3FA", border: "#29739D" },
    { bg: "#BFB7F1", border: "#6A299D" },
    { bg: "#A6BBD1", border: "#6A7E94" },
    { bg: "#FFA587", border: "#AC6852" },
    { bg: "#F1B7B7", border: "#A77373" },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <section className="w-screen h-screen overflow-hidden flex items-center justify-center flex flex-col gap-[4vh]">
        <div className="flex flex-col gap-[2vh] items-center">
          <h2 className="text-[2.6rem] font-bold text-Typo text-center">
          One Step Left
          </h2>
          <p className="text-[1.5rem] font-medium text-center w-[30vw] mx-auto text-Gray100">
            Setup your avatar, let’s connect with your colleagues now
          </p>
        </div>

        <div className="flex flex-col items-center">
          {colors.map((item, index) => (
            color === index && <Polygon key={index} color={item.bg} />
          ))}
          <div className="flex mt-[5vh] z-[100] gap-8">
            {colors.map((item, index) => (
              <div 
                className="hover:cursor-pointer w-[7vh] h-[7vh] rounded-full hover:pointer"
                style={{backgroundColor: item.bg, border: (color === index) && `5px solid ${item.border}`}}
                onClick={() => {setColor(index)}}
              ></div>
            ))}
          </div>
        </div>

        <button className=" w-[38vw] mx-auto h-[7vh] bg-Green100 rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center">
              {loading ? <div className="spinner "></div> : "Connexion"}
            </button>
    </section>
  );
};

export default Avatar;