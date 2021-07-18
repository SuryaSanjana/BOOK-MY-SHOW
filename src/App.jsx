

//  importing HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
// Components
// import Temp from "./components/temp";
//Components-pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
     
      <DefaultHOC path="/" exact component= {HomePage} />
      <MovieHOC path="/movie/:id" exact component= {MoviePage} />
      <DefaultHOC path="/plays" exact component={PlaysPage} />
    </>
  );
};

export default App;




// function App() {
//   return (
//     <div className="App p-10">
     
//      <button className="border-2
//        px-2 py-1   
//        border-sanju-500 md:border-red-500  lg:border-green-500
//        rounded 
//        bg-sanju-500 md:bg-red-500  lg:bg-green-500
//        text-sanju-500
//         hover:bg-transparent hover:border-2 hover:text-blue-500  md:hover:text-red-500   lg:hover:text-green-500   
//        outline-none focus:ring focus:border-blue-300 md:focus:border-red-300  lg:focus:border-green-300
//         ">
//        Hello TailWind
//      </button>
//      <h1 className="text-sanju-500">hello sanju</h1>
//     </div>
//   );
// }

// export default App;
