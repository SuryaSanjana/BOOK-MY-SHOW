import React from "react";


const Poster =(props)=>{
    return (
     <>
      <div className="flex flex-col items-start gap-2 px-3">
          <div className="h-80"> {/*width not mentioned coz it is dependent on no of images to be appeared on screen */}
              <img src={props.src} alt={props.title} className="ww-full h-full rounded-xl"/>
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