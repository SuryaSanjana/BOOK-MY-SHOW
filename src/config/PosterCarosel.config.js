 
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
         slideToScroll:3,
         Infinity:true,
        },
    },
    {
     breakpoints:600,
     settings:{
      slidesToShow:2,
      slideToScroll:2,
      InitialSlide:1,
     },
    },
    {
     breakpoints:480,
     settings:{
      slidesToShow:3,
      slideToScroll:2,
      InitialSlide:1,
     
     },
    },
   ],
   };

   export default settings;