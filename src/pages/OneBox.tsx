// OneBox.js
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { driverObj } from "../components/StartTour";
import HeaderBar from "../components/HeaderBar";
import SideBar from "../components/Sidebar";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";

function OneBox() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      const temp = localStorage.getItem("token");
      if (!temp) {
        driverObj.drive();
      }
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <SideBar onMenuItemClick={handleMenuItemClick} />
        <HeaderBar />
        <SubView />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <HeaderBar />
      <div>
        {/* Render the selected component */}
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <SubView />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;
