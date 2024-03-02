import { Outlet } from "react-router-dom";
import DahboardHeader from "./DahboardHeader";
import DashboardFooter from "./DashboardFooter";

const DashboardLayout = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-between">
      <DahboardHeader />
      <Outlet />
      <DashboardFooter />
    </section>
  );
};

export default DashboardLayout;
