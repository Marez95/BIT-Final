import React from "react";
import "../CandidateAbout/CandidateAbout.css";

const CandidateAbout = ({ name, email, birthday, education }) => {
  return (
    <div className="candidate-info">
      <div className="info-card">
        <img src="https://static.flashscore.com/res/image/data/tSfwGCdM-KKWyfaNo.png" />
        <div className="info-text">
          <p>Name:{name} </p>
          <p>Email:{email}</p>
          <p>Birthday:{birthday}</p>
          <p>Education:{education}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CandidateAbout;
