import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import AboutModal from "./AboutModal";
import { BsArrowRight} from "react-icons/bs"

const AboutEgro = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="about__section">
    <Container>
      <h2 className="aboutTheErgoStyleH2 text-center text-sm-start m-0">
        About the
        <span className="aboutTheErgoStyleH2Span"> ergonomics and hygiene</span>
        <br />
        Conference 2023
      </h2>

      <p className="aboutTheErgoStyleP">
        The Ergonomics and Hygiene 2023 Conference and Exhibition will be held
        on August 31, 2023 and September 1, 2022, from 9.00 a.m. to 5.00 p.m. at
        the Institute of Ergonomics and Hygiene (IEH). The environmental health
        pollution conference will be held in person, and it will not be streamed
        online. The aims of the Ergonomics and Hygiene 2023 Conference and
        Exhibition are for occupational hygienists, ergonomicists, and all other
        health and safety professionals to network and share their practices
        through a conference setting; explore current available solutions and
        technologies in hazard control and work productivity;
      </p>

      <div onClick={handleShow} className="text-center text-sm-start">
        <button className="primary__btn arrow__btn arrow__btn2 m-auto m-sm-0 ">
          Explore Conference Details <BsArrowRight/>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <AboutModal />
        </Modal.Body>
      </Modal>
    </Container>
    </div>
  );
};

export default AboutEgro;
