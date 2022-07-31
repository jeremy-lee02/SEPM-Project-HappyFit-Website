import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import about_us from "./AboutUs.json";
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
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1318,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <h2 className="mt-28 justify-center">About Us</h2>
    <div className="AboutUs h-screen hover:drop-shadow-lg"> 
      <Slider {...settings} className = 'pt-16'>
      {about_us.map((item) => (
      <div className="card cursor-pointer hover:scale-105 hover:rounded-md" key={item.id}>
       <div className="card-top flex justify-center">
         <img  src={require('../../images/'+ item.src + '.png')} alt={item.name} className= "rounded-full pt-3" />   
        </div>
        <div className="card-bottom"> 
          <h1 className='bold justify-center font-big'>{item.name}</h1>
          <h3 className='pt-2'>{item.description}</h3>
        </div>
      </div>
      ))}
      </Slider>
    </div>
    </>
  );
}
     

export default AboutUs