import React from "react";

import Slider from "react-slick";
//components
import Poster from "../Poster/poster.component";


export const Premier = () => {
    
  const settings ={
    infinity:false,
    autoplay:false,
    slidesToShow:5,
    InitialSlide:0,
    slideToScroll:2,
    responsive:[
     {
        breakpoints:1024,
        settings:{
         slidesToShow:3,
         slideToScroll:2,
         infinite:true,
        },
    },
    {
     breakpoints:768,
     settings:{
      slidesToShow:3,
      slideToScroll:2,
      InitialSlide:1,
     },
    },
    {
     breakpoints:480,
     settings:{
      slidesToShow:3,
      slideToScroll:2,
     
     },
    },
   ],
   };
   const PremierImages =
   [
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
   ];

    return (
        <>
         <Slider {...settings}>
             {PremierImages.map((image)=>(
               <Poster {...image} />
             ))} 
          </Slider>   
        </>
    );
};


export default Premier;