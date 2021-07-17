import React from "react";


 export const NextArrow = (props)=>{
// const {className,style,onClick}=props;
    return (
     <>
      <div
       className={props.className} 
       style={{...props.style,backgroundColor:"black"}}  //all the inline styles must be an object and in camilcase
        onClick={props.onClick} 

        />
    
     </>
    );
};

export const PrevArrow=(props)=>{
    return (
     <>
      <div 
       className={props.className} 
       style={{...props.style,backgroundColor:"black"}}  //all the inline styles must be an object and in camilcase
        onClick={props.onClick}/>
    
     </>
    );
};