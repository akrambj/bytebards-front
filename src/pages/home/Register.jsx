import { Link } from "react-router-dom";
import RegisterForm from "../../components/home/auth/RegisterForm";
import GoogleMicrosoftAuth from "../../components/home/auth/GoogleMicrosoftAuth";
import profile1 from "/imgs/hero/profile1.png";
import profile2 from "/imgs/hero/profile2.png";
import profile3 from "/imgs/hero/profile3.png";
import profile4 from "/imgs/hero/profile4.png";

const Register = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div className="flex gap-[4vh] px-20 w-full h-full">
        
        <div className="absolute hidden md:flex top-[0vh] left-0 right-0 bottom-0 items-center justify-between flex-wrap px-[7.5vw]">
          <div className="w-[50%] px-10">
            <img className="w-[8vw]" src={profile1} alt="" />
          </div>
          <div className="w-[50%] flex justify-end px-20">
            <img className="w-[8vw]" src={profile2} alt="" />
          </div>
          <div className="w-[50%] px-10">
            <img className="w-[8vw]" src={profile3} alt="" />
          </div>
          <div className="w-[50%] flex justify-end px-20">
            <img className="w-[8vw]" src={profile4} alt="" />
          </div>
        </div>

        <div className=" h-full w-full  flex flex-col gap-[3vh] items-center justify-center z-50">
          <div className="flex flex-col gap-[2vh] items-center">
            <h2 className="text-[2.6rem] font-bold text-Typo text-center">
              Create new account
            </h2>
            <p className="text-[1.5rem] font-medium text-center w-[30vw] mx-auto text-Gray100">
              Easily manage your Remote work with our intuitive platform.
            </p>
          </div>
          <RegisterForm />

          <div className="flex items-center justify-center gap-4">
            <div className="w-[200px] h-[1px] bg-Gray66"></div>
            <span className="uppercase text-[1rem] text-Gray66">or</span>
            <div className="w-[200px] h-[1px] bg-Gray66"></div>
          </div>

          <GoogleMicrosoftAuth />
          <p className="text-[1.2rem] text-Gray100 font-medium">
          You have already an accout ? 
            <Link className="text-Blue100" to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;