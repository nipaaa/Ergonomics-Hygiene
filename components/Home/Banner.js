import React from "react";
import { Button, Container } from "react-bootstrap";
import { BsArrowRight} from "react-icons/bs"

const Banner = () => {
  return (
    <Container className="section_gap">
      <div className="bannerTextPart">
        <p className="text-center text-sm-start m-0">Conference & Exhibition</p>
        <Button className="ban1 border-0 navbarPtagHotal">
          31 August - 1 September 2023 | The Fullerton Hotel Singapore
        </Button>

        <h1 className="navbarH1Tag">
          Ergonomics & <br/> Hygiene <span className="navbarH1TagSpan">2023</span>
        </h1>

        <p className="navbarPtagHealth">
          Holistic approach to workplace health
        </p>

        <button className="primary__btn arrow__btn arrow__btn1 m-auto m-sm-0">Register Place<BsArrowRight/> </button>
      </div>
    </Container>
  );
};

export default Banner;
