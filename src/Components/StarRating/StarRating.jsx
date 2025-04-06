import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRating() {
  let numberOfStar = 5;

  let [clickedIndex, setClickedIndex] = useState(null);
  let [hover, setHover] = useState(null);

  let handleCLick = (getCurrentIndex) => {
    setClickedIndex(getCurrentIndex + 1);
  };
  return (
    <>
      <div className="starRating flex h-[40vh] w-full justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold m-2 p-2">Star Rating </h1>
        <div>
        {[...new Array(numberOfStar)].map((_, index) => (
          <button
            key={index}
            onMouseEnter={() => {
              setHover(index + 1);
            }}
            onMouseLeave={() => {
              setHover(null);
            }}
            className={`${
              index < (hover !== null ? hover : clickedIndex)
                ? "text-amber-400"
                : "text-gray-900"
            } text-4xl cursor-pointer m-2 hover:scale-110 duration-200 `}
            onClick={() => {
              handleCLick(index);
            }}
          >
            <FaStar />
          </button>
        ))}
        </div>
      </div>
    </>
  );
}

export default StarRating;
