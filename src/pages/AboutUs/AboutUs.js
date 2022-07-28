import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Dummy_Data from "../data.json";
import './AboutUs.css';


function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

    <h2 className="mt-48 justify-center">About Us</h2>
    <div className="AboutUs h-screen  ">
      
      <Slider {...settings}>
      {Dummy_Data.map((item) => (
      <div className="card cursor-pointer hover:scale-105">
       <div className="card-top">
         <img  src={item.img} alt={item.location}/>
         <h1>{item.location}</h1>
        </div>
        <div className="card-bottom"> 
          <h3>{item.distance}</h3>
        </div>
      </div>
      ))}
      </Slider>
    </div>
    </>
  );
}
     

export default AboutUs