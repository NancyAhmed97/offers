import React from "react";
import { useSelector } from "react-redux";
import "./Mission.css";
function Mission() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "mission en_mission pr pl"
          : "ar_mission mission pr pl"
      }
    >
      <div className="mission_container text-center">
        <div className="about_title">
          <h1> {currentLocal.aboutus.visionMission}</h1>
          <div className="about_title_question_answer">
            <p className="about_title_question mb-2">
              {currentLocal.aboutus.vissionTitle}{" "}
            </p>
            <p className="about_title_answer">
              {currentLocal.aboutus.vissionPagraph}
            </p>
          </div>
        </div>
        <div className="mission_pragraph">
          <p> {currentLocal.aboutus.missionPragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
