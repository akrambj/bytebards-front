import { Link } from "react-router-dom";
import FloatingImages from "../../components/home/auth/FloatingImages";
import RegisterForm from "../../components/home/auth/RegisterForm";
import GoogleMicrosoftAuth from "../../components/home/auth/GoogleMicrosoftAuth";

const Register = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div className="flex justify-between px-20 w-full h-full">
        <FloatingImages />
        <div className=" h-full w-full  flex flex-col gap-3 items-center justify-center z-50">
          <div>
            <h2 className="text-[#0B3558] font-bold text-3xl">
              Create new account
            </h2>
          </div>
          <RegisterForm />
          <GoogleMicrosoftAuth />
          <p className="text-[#476788] font-semibold">
            You have already an accout ?{" "}
            <Link
              className="text-[#006BFF] font-bold cursor-pointer"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
