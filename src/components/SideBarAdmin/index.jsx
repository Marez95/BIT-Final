import React from 'react'
import "./SideBarAdmin.css"
import { useNavigate } from 'react-router-dom'

const SideBarAdmin = () => {

  const navigate = useNavigate();

  const redirectToAdminReports = () => {
    navigate("/adminReports")
};

  const redirectToAdminCreateReports = () => {
    navigate("/adminCreateReports")
};

  return (
    <div className='sidebar'>
       <button onClick={redirectToAdminReports}>Reports</button> 
       <button onClick={redirectToAdminCreateReports}>Create Reports</button>
    </div>
  )
}

export default SideBarAdmin