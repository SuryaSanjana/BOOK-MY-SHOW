import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
// import Premier from "../components/Premier/Premier.component";

//config
import TempPosters from "../config/TempPosters.config";


const HomePage =()=>{
    return (
        <>
          <div className="flex flex-col gap-16">
             
              <div className="container mx-auto px-20 ">
                  <h1 className="text-2xl font-bold text-gray-800 my-3">The Best Of Entertainment </h1>
                  <EntertainmentCardSlider />
              </div>
         
              <div className ="bg-bms-800 py-8 ">
                   <div className ="container mx-auto px-10 flex flex-col gap-3 ">
                      <div className=" flex items-center justify-between md-flex  px-2 py-0 ">
                            <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay"
                            className="w-full h-full"
                            />   
                       </div>
                       <PosterSlider images={TempPosters} 
                        title="Premiers" 
                        isDark 
                        subtitle="Brand new release every friday"
                         /> 
                    </div>
                </div>

            </div>


            {/* for online streaming events */}
            <div className="container mx-auto px-4 my-8">
             <PosterSlider 
             images={TempPosters} 
             title="Online streaming Events"
              isDark={false}/> 

            </div>
            {/* outdoor events */}
            <div className="container mx-auto px-4 my-8">
             <PosterSlider 
             images={TempPosters} 
             title="Outdoor Events"
              isDark={false}/> 

            </div>
        </>
    );
};

export default HomePage;