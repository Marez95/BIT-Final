import React from "react";
import "./Main.css";
import professionalphoto from "../images/professionalphoto.jpg";
import { useNavigate } from "react-router-dom"


const Main = () => {
            const navigate = useNavigate();
            
            const redirectToCandidates = () => {
                navigate('/candidates')
            }
            
            const redirectToAdmin = () => {
                navigate('/admin')
            }

    return (
        <div className="main">
      <div className="main-intro">
        <h1>MML</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo veniam
          aperiam dolore itaque doloremque fuga id? Et illum debitis neque magni
          error nemo perferendis quisquam veniam sit officiis, quaerat deleniti
          sint voluptas tempore. Exercitationem eaque quam quaerat officiis
          tempore nobis fugit! Nemo, labore dignissimos! Deleniti molestias
          blanditiis adipisci, suscipit, sint tempora, repellat esse minus
          corporis autem sit vitae aut inventore.
        </p>
      <div className="main-buttons">
        <button onClick={redirectToCandidates} className="get-started-button">Get Started</button>
        <button onClick={redirectToAdmin} className="admin-button">Admin</button>
      </div>
      </div>
      <div className="main-photo">
        <img src={professionalphoto} alt="" />
      </div>
    </div>
  );
};

export default Main;
