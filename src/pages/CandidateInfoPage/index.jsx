import React from "react";
import "./CandidateInfoPage.css";
import Footer from "../../components/Footer";
import CandidateAbout from "../../components/CandidateAbout";

const CandidateInfoPage = ({ data }) => {
  console.log(data);
  return (
    <div className="candidateInfoPage">
      <CandidateAbout
        name={data.name}
        email={data.email}
        birthday={data.birthday}
        education={data.education}
      />
      <Footer />
    </div>
  );
};

export default CandidateInfoPage;
