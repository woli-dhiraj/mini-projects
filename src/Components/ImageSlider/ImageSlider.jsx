import React, { useEffect, useState } from "react";
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";
import car4 from "../../assets/car4.jpg";
import car5 from "../../assets/car5.jpg";
import Index from "../Accordion/Index";
function ImageSlider() {
  let [imageIndex, setImageIndex] = useState(0);
  let images = [car1, car2, car3, car4, car5];
  let classname = "";
  let handleNextImage = () => {
    setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
  };

  let handlePrevImage = () => {
    setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-screen w-full flex justify-center  items-center flex-col ">
      <h1 className="text-2xl font-semibold">Image Carousel  </h1>
      <div className="container h-[80%] w-[60%] m-3 relative  flex rounded-xl ">
        <div className="imageSlider flex h-full w-full  overflow-hidden">
          {images.map((img, index) => (
            <img
              style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              key={index}
              src={img}
              alt="cars"
              className="h-full w-full duration-500 object-cover shrink-0 grow-0 hover:opacity-90 "
            />
          ))}
        </div>

        <button
          onClick={() => {
            handlePrevImage();
          }}
          className="absolute hover:bg-[rgb(0,0,0,0.6)] text-white duration-200 text-2xl cursor-pointer left-5 top-[50%] bg-[rgb(0,0,0,0.7)] p-2 rounded-full h-12 w-12 flex justify-center items-center hover:scale-110  "
        >
          {"<-"}
        </button>
        <button
          onClick={() => {
            handleNextImage();
          }}
          className="absolute text-2xl  hover:bg-[rgb(0,0,0,0.6)] text-white cursor-pointer right-5  top-[50%]  bg-[rgb(0,0,0,0.7)] p-2 rounded-full 
        h-12 w-12 flex justify-center items-center hover:scale-110 duration-200"
        >
          {"->"}
        </button>

        <div className="absolute  left-[40%] bottom-0 space-x-1   ">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setImageIndex(index);
              }}
              className={`${
                index === imageIndex ? "bg-gray-50" : "bg-[#7f7f8798]"
              }  h-3 w-3 cursor-pointer hover:scale-110 duration-200 transition-all rounded-full ease-in-out hover:bg-[#bab4b4aa]`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
