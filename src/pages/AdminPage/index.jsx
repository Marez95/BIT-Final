import React from "react";
import './AdminPage.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBarAdmin from "../../components/SideBarAdmin";
import MainAdmin from "../../components/MainAdmin";

const AdminPage = () => {
  return (
    <div className="AdminPage">
      <Header />
      <div className="sidebarAndMain">
        <SideBarAdmin />
        <MainAdmin />
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
