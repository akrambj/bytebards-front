import { Outlet } from "react-router-dom";
import DahboardHeader from "./DahboardHeader";
import DashboardFooter from "./DashboardFooter";

const DashboardLayout = () => {
  const token = localStorage.getItem("access_token");
  console.log(token, "tokeeen");

  console.log(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlmZTU4ZjFiLWMyMDItNGQyNC05ZWEwLWY0MTdlMmUyZGMxMSIsImV4cCI6MjA2OTMxNDM0OH0.xDtGvAm3-sE7XJB6tBklVcn0TxyKcc1OOzcBfAC1tKs" ===
      token
  );
  return (
    <section className="min-h-screen w-screen flex flex-col justify-between">
      <DahboardHeader />
      <Outlet />
      <DashboardFooter />
    </section>
  );
};

export default DashboardLayout;
