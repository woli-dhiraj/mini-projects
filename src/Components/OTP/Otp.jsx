import React, { useEffect, useRef, useState } from "react";

function Otp() {
  let OPT_DIGITS = 5;
  let arrRef = useRef([]);

  let [input, setInput] = useState(new Array(OPT_DIGITS).fill(""));
  let [status, setStatus] = useState("");

  let handleOnChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }
    let newInput = [...input];
    let newValue = value.trim();
    newInput[index] = newValue.slice(-1);

    setInput(newInput);

    value && arrRef.current[index + 1]?.focus();
  };

  useEffect(() => {
    arrRef.current[0]?.focus();
  }, []);

  let handleBackSpace = (e, index) => {
    if (e.key === "Backspace") {
      if (input[index] == "") {
        arrRef.current[index - 1]?.focus();
      }
    }
  };

  let handleSubmit = () => {
    if (input.includes("")) {
      setStatus("Please fill all fields");
      return;
    }
    const otp = input.join("");
    if (otp === "11111") {
      setStatus("success");
    } else {
      setStatus("failed");
    }
    setTimeout(() => {
      setInput(new Array(OPT_DIGITS).fill(""));
      arrRef.current[0]?.focus();
      setStatus("");
    }, 1000);
  };
  return (
    <>
      <h1 className="text-2xl font-semibold m-2">OTP Generator</h1>
      <div className="container h-40vh w-full flex justify-center items-center m-2">
        {input.map((int, index) => {
          return (
            <div key={index}>
              <input
                required
                onKeyDown={(e) => {
                  handleBackSpace(e, index);
                }}
                className="w-15 h-15  border m-2 p-2 text-2xl text-center"
                value={int}
                ref={(el) => (arrRef.current[index] = el)}
                onChange={(e) => {
                  handleOnChange(e.target.value, index);
                }}
                type="text"
              ></input>
            </div>
          );
        })}
      
     
      </div>
     <div className="btn flex justify-center items-center">
     <button onClick={handleSubmit} className="cursor-pointer border py-2 px-3 rounded hover:bg-green-200 duration-300 hover:scale-110">
        Submit
      </button>
     </div>
      {status && (
        <div className="text-center mt-4 text-xl font-bold">
          {status && (
            <div className="text-center mt-4 text-xl font-bold">
              {status === "success" ? (
                <p className="text-green-600">Login Successful ✅</p>
              ) : status === "failed" ? (
                <p className="text-red-600">Login Failed ❌</p>
              ) : (
                <p className="text-yellow-600">{status}</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Otp;
