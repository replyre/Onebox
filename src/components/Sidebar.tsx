import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../assets/Fevicon.png";

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState("/");
  const [isHovering, setIsHovering] = useState(false);

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl tour-logo">
        <img
          src={logo}
          className="h-8 rounded-xl object-left overflow-visible"
          alt="Logo"
        />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
          } tour-home`}
          onClick={() => handleMenuItemClick("/")}
        >
          <RiHome5Fill />
        </div>
        <div
          className={`cursor-pointer  p-1 ${
            selectedItem === "/search" ? "bg-gray-600 rounded-lg" : ""
          } tour-search`}
          onClick={() => handleMenuItemClick("/search")}
        >
          <RiUserSearchLine />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
          } tour-mail`}
          onClick={() => handleMenuItemClick("/mail")}
        >
          <RiMailFill />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
          } tour-send`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <IoIosSend />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
          } tour-stack`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <SiElasticstack />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/inbox" ? "bg-gray-600  rounded-lg" : ""
          } tour-inbox`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <FaInbox />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/stacks" ? "bg-gray-600 rounded-lg" : ""
          } tour-stats`}
          onClick={() => handleMenuItemClick("/stacks")}
        >
          <IoStatsChartSharp />
        </div>
      </div>
      <div
        className="relative cursor-pointer text-white bg-green-500 px-2.5 py-2 rounded-full tour-logout"
        onClick={handleLogout}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <p>VS</p>
        {isHovering && (
          <div className="absolute bg-[#1F1F1F] text-white rounded-lg p-1 z-50 left-[-0.9rem] top-[-2rem]">
            Logout
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
