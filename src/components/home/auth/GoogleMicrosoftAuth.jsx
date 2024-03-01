import microsoft from "/imgs/hero/microsoft.webp";
import googlemin from "/imgs/hero/google_min.webp";


const GoogleMicrosoftAuth = () => {
  return (
    <div className="flex items-center gap-8 ">
      <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-[84px] py-[10px] rounded-[12px] bg-white">
        <img className="w-6" src={googlemin} alt="microsoft" />{" "}
        <span className="text-[1.2rem] font-bold text-Typo">Google</span>
      </button>
      <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-[84px] py-[10px] rounded-[12px] bg-white" >
        <img className="w-6" src={microsoft} alt="microsoft" />{" "}
        <span className="text-[1.2rem] font-bold text-Typo">Microsoft</span>
      </button>
      </div>
  );
};

export default GoogleMicrosoftAuth;
