import React from "react";
import "./Main.css";
import professionalphoto from "../images/professionalphoto.jpg";
import { useNavigate } from "react-router-dom";

const Main = ({ token }) => {
  const navigate = useNavigate();

  const redirectToCandidates = () => {
    navigate("/candidates");
  };

  const redirectToAdmin = () => {
    if (token) navigate("/admin");
    else navigate("/admin-login");
  };

  return (
    <div className="main">
      <div className="main-intro">
        <h1>MML</h1>
        <p>
          <span>MML</span> je firma koja revolucionarno povezuje talente sa
          perspektivnim poslodavcima. Svojom inovativnom platformom za spajanje,
          MML koristi najnovije tehnologije masinskog ucenja kako bi stvorila
          idealne profesionalne spojeve. Nas pristup se fokusira na precizno
          utvrdjivanje vestina i ineresa kandidata, koristeci napredne algoritme
          kako bi pronasli savrsen sklad izmedju individua i kompanija.
        </p>
        <p className="second-p">
          <span>MML</span> se istice personalizovanim pristupom, osiguravajuci
          da svaki kandidat ima priliku da se predstavi na najbolji nacin, dok
          kompanijama pruza uvid u sveobuhvatne informacije o kandidatima. Nasa
          firma tezi stvaranju odrzivih i uspesnih radnih odnosa, gradeci most
          izmedju ambicija pojedinaca i potreba kompanija. U svetu MML-a,
          profesionalno spajanje postaje jednostavno, efikasno i inspirativno
          iskustvo za sve ukljucenje strane.
        </p>
        <div className="main-buttons">
          <button onClick={redirectToCandidates} className="get-started-button">
            Get Started
          </button>
          <button onClick={redirectToAdmin} className="admin-button">
            Admin
          </button>
        </div>
      </div>
      <div className="main-photo">
        <img src={professionalphoto} alt="" />
      </div>
    </div>
  );
};

export default Main;
