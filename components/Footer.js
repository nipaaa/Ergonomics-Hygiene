import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../public/icons/right-arrow.png";
import logo from "../public/logo/logoNew.jpg";
import { CgFacebook } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (

    <Container className="mt-5 mb-3">

      <div className="row g-3 g-lg-5">
        <div className="footer col-12 col-lg-6">
          <h1 className="mb-4">Ready to join us ?</h1>
          <a className="RegistrationPage" href="RegistrationPage">
            Register Now <Image className="ms-2" src={arrow} alt="arrow" />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="footer d-flex flex-column flex-lg-row justify-content-between">
            <div className="d-flex w-100 flex-column">
              <a href="SpeakerPage">Speakers</a>
              <a href="">Programme</a>
              <a href="">Tickets</a>
            </div>
            <div className="d-flex w-100 flex-column">
              <a href="">Gallery</a>
              <a href="">Our Partners</a>
              <a href="">Post Conference Workshop</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row g-3 g-lg-5 align-items-center">
        <div className="col-12 col-sm-6 col-lg-6">
          <a href="" className="d-block text-center text-md-start">
            <Image className="ms-2" src={logo} alt="arrow" />
          </a>
        </div>
        <div className="col-12 col-sm-6 col-lg-6">
          <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between ">
            <div className="reserve">
              <p className="m-lg-0 text-center" >@2023. All right resereved</p>
            </div>
            <div className="icon d-flex align-items-center justify-content-center text-white">
              <a href="">
                {" "}
                <BsTwitter />
              </a>
              <a href="">
                {" "}
                <CgFacebook />
              </a>
              <a href="">
                {" "}
                <BsInstagram />
              </a>
              <a href="">
                {" "}
                <AiFillYoutube />
              </a>
              <a href="">
                {" "}
                <TfiPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
