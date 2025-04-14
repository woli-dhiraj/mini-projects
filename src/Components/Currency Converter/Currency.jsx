import React, { useEffect, useRef, useState } from "react";
import currencyNames from "./Data";

function Currency() {
  let [apiData, setApiData] = useState([]);
  let [amount, setAmount] = useState('');
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertedAmount, setConvertedAmount] = useState(0);


let inputRef=useRef()


  let fetchData = async () => {
    let response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.4.11/v1/currencies/${from}.json`
    );
    let jsonData = await response.json();
    setApiData(jsonData[from]);
    inputRef.current.focus()
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [from, to]);

  let handleConvert = () => {
    console.log(apiData[to] * amount);
    setConvertedAmount(amount * apiData[to]);
    setAmount("");
  };

  let handleInput = (value) => {
 
    if (!/^\d*$/.test(value)) { 
      return; 
    }
  
    setAmount(value); 
  };
  
  return (
    <>
      <h1 className="text-2xl font-semibold m-2">Currency Convertor</h1>

      <div className="container border flex flex-col justify-center items-center m-2 p-3 w-full  ">

        <div className="inputBox flex w-full justify-center items-center gap-10 ">
          <div className="left flex flex-col justify-center p-2">
            <h3 className="text-2xl font-semibold ">From</h3>
            <select
              name="fromCountry"
              value={from}
              id="fromcountry"
              className="p-2 text-xl border outline-none w-[8vw]"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            >
              {apiData &&
                Object.keys(apiData).map((count, index) => {
                  return (
                    <option key={index} value={count}>
                      {count}
                    </option>
                  );
                })}
            </select>

              <h1 className="text-xl font-semibold">{currencyNames[from]}</h1>
          </div>
          <div className="right  flex flex-col justify-center p-2  ">
            <h3 className="text-2xl font-semibold">To</h3>
            <select
              name="to"
              id="to-Country "
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
              className="p-2 text-xl border outline-none w[8vw  ] "
            >
              {apiData &&
                Object.keys(apiData).map((count, index) => {
                  return (
                    <option key={index} value={count}>
                      {count}
                    </option>
                  );
                })}
            </select>
            <h1 className="text-xl font-semibold ">{currencyNames[to]}</h1>
          </div>
        </div>

        <div className="amount ">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col w-full h-[25vh] justify-center items-center  p-2"
          >
            <input
            ref={inputRef}
              value={amount}
              onChange={(e)=>{handleInput(e.target.value)}}
              type="text"
              placeholder="$0000 "
              className="border px-3 py-2 text-xl outline-none"
            />
            <button
              onClick={handleConvert}
              className="px-3 py-2 bg-green-200 cursor-pointer rounded border m-2 w-[14vw]"
            >
              Convert
            </button>
          </form>
        </div>

        <div className="currencyRates">
          <h1>
            {apiData[to] &&
              `Conversion rate of  ${from.toUpperCase()} To ${to.toUpperCase()} is  ${convertedAmount.toFixed(
                2
              )}`}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Currency;
