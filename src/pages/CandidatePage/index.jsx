import React from "react";
import "./CandidatePage.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Candidates = ({ candidates }) => {
  const navigate = useNavigate();

  const redirectToCandidates = () => {
    navigate("/candidateInfo");
  };
  console.log(candidates);
  return (
    <div className="all-candidates">
      <Header />

      {candidates?.map((kandidat) => {
        console.log(kandidat);
        return (
          <div onClick={redirectToCandidates} className="single-candidate">
            <img src={kandidat.avatar} alt="asdasd" />
            <p>Name: {kandidat.name}</p>
            <p>Email: {kandidat.email}</p>
            <p>Birthday: {kandidat.birthday}</p>
            <p>Education: {kandidat.education}</p>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Candidates;
