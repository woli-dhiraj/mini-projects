import React, { useEffect, useState } from "react";

const Progress = ({ prog }) => {
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setProgress(prog);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [prog]);
  return (
    <div className="outer border h-7 w-full rounded overflow-hidden m-2">
      <div
        className="inner bg-green-300 h-full w-full flex justify-end items-center transition-all linear duration-400    "
        style={{ transform: `translateX(${progress - 100}%)` }}
      >
        {prog}%
      </div>
    </div>
  );
};
function Progressbar() {
  let [data, setData] = useState([10, 20, 40, 60, 80, 100]);
  let random = Math.floor(Math.random() * 10) + 1;
  return (
    <>
    <h1 className="text-2xl font-semibold ">Progress Bar</h1>
      {data && data.length > 0 ? (
        data.map((bar, index) => <Progress key={index} prog={bar} />)
      ) : (
        <p>Progress is not define</p>
      )}

      <div className="buttons flex justify-center items-center gap-2 m-2 ">
        <button
          onClick={() =>
            setData((prev) =>
              prev.map((value) =>
                value >= 0 && value < 90 ? value + random : value
              )
            )
          }
          className="border px-3 py-2 bg-red-200 rounded cursor-pointer"
        >
          add random number
        </button>

        <button
          onClick={() =>
            setData((prev) =>
              prev.map((value) =>
                value <= 100 && value > 10 ? value - random : value
              )
            )
          }
          className="border px-3 py-2 bg-red-200 rounded cursor-pointer"
        >
          remove random number
        </button>
      </div>
      <p className="text-gray-600 text-sm">Random number will be between 1 to 9</p>
    </>
  );
}

export default Progressbar;
