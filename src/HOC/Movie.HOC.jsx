import React from "react";
import { Route } from "react-router-dom";

//layout
import MovieLayout from "../layouts/Movie.layout";


const MovieHOC=({component :Component,...rest})=>{ 
    //const Component=component  (or)  component:Component  we need to do this coz components should have a capital letter
    return(
        <>
          <Route 
             {...rest} 
             component = {(props)=>(
               <MovieLayout>
                   <Component {...props}/> 
               </MovieLayout>
             )}
            />     
        </>
    );
};

export default MovieHOC;
