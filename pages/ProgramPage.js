import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import BreakBtn from "../components/Home/BreakBtn";
import BreakBtnday1 from "../components/Home/BreakBtnday1";
import HealthManagement from "../components/Home/HealthManagement";
import HealthMngDay1 from "../components/Home/HealthMngDay1";
import ProgrammeDetails from "../components/Home/ProgrammeDetails";
import Timeline from "../components/Timeline/Timeline";
import TimeLineDay1 from "../components/Timeline/TimeLineDay1";

const ProgramPage = () => {
  return (
    <div>
      <Header />
      <div className="section_gap top_gap">
        <Container className="text-center">
          <h2 className="program_title">Programme Details</h2>
          <p className="mute_content">
            Hands-on sessions with Apoint experts that are hosted in The
            Fulertone Hotel Singapore on May 3 (9am - 5pm).
          </p>
        </Container>
        <div>
        <h2 className=" text-center day mt-5">Day 1 </h2>
          <HealthMngDay1 />

          <TimeLineDay1 />
          <BreakBtnday1 />
        </div>
        <div>
        <h2 className=" text-center day mt-5">Day 2</h2>
        <HealthManagement />
          <Timeline />
          <BreakBtn />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramPage;
