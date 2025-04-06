import React from "react";
import Index from "./Components/Accordion/Index";
import RandomColor from "./Components/RandomColor/RandomColor";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import LoadMore from "./Components/LoadMore/LoadMore";
import FileStructure from "./Components/FileStructure/FileStructure";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    < >
      <div className="main flex flex-col justify-center items-center">
        <h1 className="h-[10vh] w-full bg-blue-200 flex justify-center items-center text-2xl font-semibold font-mono">MINI PROJECT </h1>
      <Index />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <LoadMore />
      <FileStructure/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
