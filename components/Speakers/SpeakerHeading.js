import React from "react";
import Image from "next/image";
import radio from "../../public/speakers/icon/radio.png";

const SpeakerHeading = () => {
  return (
    <div className="">
      <div className="speaker d-flex align-items-center justify-content-center justify-content-sm-start">
        <Image src={radio} alt="img" />
        <h2 className="speaker__heading fw-bold">This Year’s Speakers</h2>
      </div>

      <p className="spk_con">
        We believe a great speaker can change the world by their voice
      </p>
    </div>
  );
};

export default SpeakerHeading;
