import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "/imgs/manager/header/profile.png";
import logo from "/imgs/header/logo.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { BiLogOut, BiNotification } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const DashboardHeader = () => {
  const [theIndex, setTheIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  const [notif, setNotif] = useState(false);
  const menuLinks = [
    { name: "projects", link: "/dashboard" },
    { name: "upgrade", link: "/dashboard/upgrade" },
    { name: "support", link: "/dashboard/support" },
  ];

  const logout = () => {
    localStorage.removeItem("access_token");
  };

  // Update theIndex when clicking on a NavLink
  const handleNavLinkClick = (index) => {
    setTheIndex(index);
  };

  return (
    <header className="fixed flex flex-col bg-white z-[100]">
      <div className="bg-Gray10 h-[4vh] w-screen px-[10vw] flex items-center justify-end">
        <div className="flex gap-[0.8vw] items-center justify-center">
          <AiOutlineGlobal className="text-Gray100 text-[1.5rem]" />
          <p className="text-Gray100 font-bold text-[0.9rem]">English</p>
          <FaChevronDown className="text-Gray100" />
        </div>
      </div>

      <div className="bg-white border-b-2 border-[#E7EDF6] h-[9vh] px-[10vw] flex items-center justify-between">
        <div className="logo w-[25%]">
          <a href="/" className="uppercase text-blue-600 font-bold text-3xl">
            {" "}
            {/* Changed to <a> for external link */}
            <img className="w-32" src={logo} alt="" />
          </a>
        </div>

        <div className="nav flex items-center">
          <ul className="flex items-center gap-[5vw]">
            {menuLinks.map((menu, index) => (
              <li key={index} className="">
                <NavLink
                  to={menu.link}
                  onClick={() => handleNavLinkClick(index)} // Update theIndex on click
                  className={`text-lg capitalize cursor-pointer ${
                    index === theIndex
                      ? "text-[#006BFF] font-bold"
                      : "font-semibold"
                  }  hover:text-[#006BFF] duration-300 transition-all ease-in`}
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center gap-7 w-[25%]  justify-end">
          <div className="text-Typo text-xl hover:cursor-pointer">
            <BiNotification />
          </div>
          <div
            className=" w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            <img
              src={profile}
              className="w-full h0full object-cover rounded-full"
              alt=""
            />
          </div>

          {menu && (
            <div className="bg-white shadow-md drop-shadow-md absolute top-20 right-0 flex flex-col items-center justify-center">
              <button
                className="flex items-center gap-6 px-10 py-5"
                onClick={() => {
                  setMenu(false);
                  setSettings(true);
                }}
              >
                <IoSettingsOutline className="text-3xl" />
                <p>Settings</p>
              </button>

              <button
                className="flex items-center gap-6 px-10 py-5 text-red-500"
                onClick={logout}
              >
                <BiLogOut className="text-3xl" />
                <p>Logout</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
