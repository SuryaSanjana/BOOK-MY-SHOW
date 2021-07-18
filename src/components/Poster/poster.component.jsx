import React from "react";


const Poster =(props)=>{
    return (
     <>
      <div className="flex flex-col items-start gap-2 px-1 md:px-2">
          <div className="h-40 md:h-80 "> {/*width not mentioned coz it is dependent on no of images to be appeared on screen */}
            <img src={props.src} alt={props.title} className="w-full h-full rounded-md"/>
          </div>
          <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-700"}`}>
            {props.title}
          </h3>
          <p className={`text-sm  ${props.isDark?"text-white":"text-gray-700"}`}>
            {props.subtitle}
          </p>
       </div>  
     </>
    );
};

export default Poster;