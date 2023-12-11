import React from "react";
import "./AdminPage.css";
import SideBarAdmin from "../../components/SideBarAdmin";
import MainAdmin from "../../components/MainAdmin";

const AdminPage = () => {
  return (
    <div className="AdminPage">
      <div className="sidebarAndMain">
        <SideBarAdmin />
        <MainAdmin />
      </div>
    </div>
  );
};

export default AdminPage;
