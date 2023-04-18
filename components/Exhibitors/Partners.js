import React from "react";
import iom from "../../public/supporting-organization/iom.png";
import ohta from "../../public/supporting-organization/ohta.png";
import occupation from "../../public/supporting-organization/occupation.png";
import hfess from "../../public/supporting-organization/hfess.png";
import iiha from "../../public/supporting-organization/iiha.png";
import iosh from "../../public/supporting-organization/iosh.png";
import asia from "../../public/supporting-organization/asia.png";
import national from "../../public/supporting-organization/national.png";
import wsha from "../../public/supporting-organization/wsha.png";
import nsca from "../../public/supporting-organization/nsca.png";
import miha from "../../public/supporting-organization/miha.png";
import naihe from "../../public/supporting-organization/naihe.png";
import Image from "next/image";

import Head from "next/head";

import Slider from "react-slick";

const Partners = () => {
  const brands = [
    {
      pic: iom,
    },
    {
      pic: ohta,
    },
    {
      pic: hfess,
    },
    {
      pic: wsha,
    },
    {
      pic: nsca,
    },
    {
      pic: occupation,
    },
    {
      pic: iiha,
    },
    {
      pic: iosh,
    },
    {
      pic: asia,
    },
    {
      pic: national,
    },
    {
      pic: naihe,
    },
    {
      pic: miha,
    },
  ];


  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <div className="Partnet__Slider d-block d-lg-none">
      <Slider {...settings}>
          {
            brands.map((brand, index) => (
              <div className="slide__items" key={index}>
                <Image
                  className="img-fluid mx-auto"
                  height={78}
                  src={brand.pic}
                  alt="brand img"
                />
              </div>))
          }
        </Slider>
      </div>
      <div >
       

        <div className="d-none d-lg-flex flex-column flex-lg-row flex-wrap  align-items-center justify-content-lg-between  partner">
          {brands.slice(0, 5).map((brand, index) => (
            <div key={index}>
              <Image
                className="img-fluid mx-auto"
                height={78}
                src={brand.pic}
                alt="brand img"
              />
            </div>
          ))}
        </div>
        <div className="d-none d-lg-flex flex-column flex-lg-row flex-wrap flex-lg-nowrap align-items-center justify-content-lg-between  partner">
          {brands.slice(5, 12).map((brand, index) => (
            <div key={index}>
              <Image
                className="img-fluid mx-aut0"
                height={78}
                src={brand.pic}
                alt="brand img"
              />
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Partners;
