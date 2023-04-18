import React, { useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { BsArrowRight} from "react-icons/bs"

const AccomodationCard = ({accomodation, index}) => {

  const [odd, setOdd] = useState( index%2 === 0)

  console.log(odd)
  // odd 
  return (
    <>
    
 
    {odd ?     <div className="accomodation_card_bg row my-3 my-lg-5">
          <div className="accomodation col-12 col-lg-6">
          <Image style={{height:"483px", borderRadius:"27px"}} className="img-fluid w-100" src={accomodation?.pic} alt="img" />
        </div>
        <div className="accomodation col-12 col-lg-6">
          <p className="accomodation_bluetitle">{accomodation?.blueTitle}</p>
          <p className="accomodation_title">{accomodation?.title}</p>
          <p className="accomodation_content">
          {accomodation?.content1}
          </p>
          <p className="accomodation_content">
          {accomodation?.content2}
          </p>
          <p id="special" className="accomodation_content m-0">
          {accomodation?.specialContent}
          </p>
          <a href=""><Button className="primary__btn gap arrow__btn arrow__btn5">Learn More <BsArrowRight/></Button></a>
        </div>
      
      </div>  :    <div className="accomodation_card_bg row my-3 my-lg-5">
         
        <div className="accomodation col-12 col-lg-6">
          <p className="accomodation_bluetitle">{accomodation?.blueTitle}</p>
          <p className="accomodation_title">{accomodation?.title}</p>
          <p className="accomodation_content">
          {accomodation?.content1}
          </p>
          <p className="accomodation_content">
          {accomodation?.content2}
          </p>
          <p id="special" className="accomodation_content m-0">
          {accomodation?.specialContent}
          </p>
          <a href=""><Button className="primary__btn gap arrow__btn arrow__btn5">Learn More <BsArrowRight/></Button></a>
        </div>
        <div className="accomodation col-12 col-lg-6">
          <Image style={{height:"483px", borderRadius:"27px"}} className="img-fluid w-100" src={accomodation?.pic} alt="img" />
        </div>
      
      </div> }
      
      </>
      
  );
};

export default AccomodationCard;
