import React, { useState } from "react";
import { Button, ButtonGroup, Container, Nav } from "react-bootstrap";
import Timeline from "../Timeline/Timeline";
import TimeLineDay1 from "../Timeline/TimeLineDay1";
import BreakBtn from "./BreakBtn";
import BreakBtnday1 from "./BreakBtnday1";
import HealthManagement from "./HealthManagement";
import HealthMngDay1 from "./HealthMngDay1";

const ProgrammeDetails = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Container>
      <div className="text-center">
        <h2 className="program_title">Programme Details</h2>
        <p className="mute_content">
          Hands-on sessions with Apoint experts that are hosted in The Fulertone
          Hotel Singapore on May 3 (9am - 5pm).
        </p>
      </div>
      <div className="text-center btngrp">
        <button
          className={
            toggleState === 1
              ? "program__btn program__btn1 border-0"
              : "program__btn program__btn2 border-0"
          }
          onClick={() => toggleTab(1)}
        >
          {" "}
          Day 1
        </button>
        <button
          className={
            toggleState === 2
              ? "program__btn program__btn1 border-0"
              : "program__btn program__btn2 border-0"
          }
          onClick={() => toggleTab(2)}
        >
          {" "}
          Day 2
        </button>
      </div>
      <div>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <HealthMngDay1 />

          <TimeLineDay1 />
          <BreakBtnday1 />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <HealthManagement />
          <Timeline />
          <BreakBtn />
        </div>
      </div>
    </Container>
  );
};

export default ProgrammeDetails;
