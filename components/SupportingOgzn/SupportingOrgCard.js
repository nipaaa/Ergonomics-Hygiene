import Image from 'next/image';
import React from 'react';
import { Button } from 'react-bootstrap';
import { BsArrowRight} from "react-icons/bs"

const SupportingOrgCard = ({organization}) => {
    return (
        <div className="col-6 col-lg-6">
            <div className="card supporting_shadow border-0 p-3 p-xl-5 accomodation_content">
              <Image className="img-fluid" src={organization.pic} alt="organization img" />
              <h4 className="fw-bold my-4 black_title inst__title text-center text-sm-start">{organization.title}</h4>
              <p className="inst__p d-md-none">{organization.description.slice(0,100)}</p>
              <p className="inst__p d-none d-md-block">{organization.description}</p>
              <a href="">
                <Button className="primary__btn arrow__btn arrow__btn5 border-0 mt-4 ">
                  Visit Website <BsArrowRight/>
                </Button>
              </a>
            </div>
          </div>
    );
};

export default SupportingOrgCard;