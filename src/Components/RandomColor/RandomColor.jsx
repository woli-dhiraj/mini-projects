import React, { use, useEffect, useState } from "react";

function RandomColor() {
  let [typeOfColor, setTypeOfColor] = useState(null );
  let [color, setColor] = useState("");

  let randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  let handleHexColor = () => {
    let color = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += color[randomColorUtility(color.length)];
    }

    setColor(hexColor);
  };

  let handleRgbColor = () => {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  let handleClearButton=()=>{
    setColor( "")
    setTypeOfColor(null)
  }

  useEffect(()=>{
    if (!typeOfColor) return;
    if(typeOfColor==='HEX'){
        handleHexColor()
    }
    else if(typeOfColor==='RGB'){
        handleRgbColor()
    }
  },[typeOfColor])
  return (
    <>
    <h1 className="text-2xl font-semibold">Generate Random Color </h1>
      <div
        className="colorContainer h-[50vh] w-[70vw]  border rounded p-2 m-2 flex justify-center flex-col items-center"
        style={{ background: color }}
      >
        <div className="buttons">
          <button
            onClick={() => {
              setTypeOfColor("HEX");
            }}
            className="border px-3 py-2 m-2 rounded w-fit h-fit cursor-pointer hover:shadow-2xl duration-200 hover:scale-110"
          >
            Hex
          </button>
          <button
            onClick={() => {
              setTypeOfColor("RGB");
            }}
            className="border px-3 py-2 m-2 rounded w-fit h-fit cursor-pointer hover:shadow-2xl duration-200 hover:scale-110"
          >
            RGB
          </button>
          <button
          disabled={!typeOfColor}
            onClick={typeOfColor === "HEX" ? handleHexColor : handleRgbColor}
            className="border px-3 py-2 m-2 rounded w-fit h-fit cursor-pointer hover:shadow-2xl duration-200 hover:scale-110"
          >
            Generate Random Color
          </button>

          <button onClick={handleClearButton}
          className="border px-3 py-2 m-2 rounded w-fit h-fit cursor-pointer hover:shadow-2xl duration-200 hover:scale-110"
          >Clear</button>
        </div>

        <div className="colorText flex flex-col gap-2 p-2 m-2">
          <h1 className="text-3xl font-semibold font-mono">{typeOfColor ? (typeOfColor==='HEX'? "HEX COLOR":"RGB COLOR"):"Select color type "}</h1>
          <h1 className="text-2xl font-semibold ">{color}</h1>
        </div>
      </div>
    </>
  );
}

export default RandomColor;
