import React, { useState } from "react";
import data from "./Data";
function Index() {
  let [single, setSingle] = useState(null);
  let [multiple, setMultiple] = useState([]);
  let [enableMultipleSelection, setEnableMultipleSelection] = useState(false);


  let handleButtonToggle = () => {
    setEnableMultipleSelection(!enableMultipleSelection);
    setMultiple([]);
    setSingle(null);
  };
  let handleSelection = (id) => {
    if (enableMultipleSelection) {
      handleMultipleSelection(id);
    } else {
      handleSingleSelection(id);
    }
  };

  let handleSingleSelection = (getCurrentId) => {
    
    setSingle(single===getCurrentId ? null:getCurrentId);
    
  };

  let handleMultipleSelection = (getCurrentId) => {
  
    let copyMultiple = [...multiple];
    let findCurrentId = multiple.indexOf(getCurrentId);
    if (findCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findCurrentId, 1);
    }

    setMultiple(copyMultiple);
  };
  return (
    <>
      <div className="container h-auto w-full p-10 flex justify-center">
        <div className="accordion flex flex-col gap-2">
          <h1 className="text-2xl  font-semibold text-center">Multiple Selection Accordion</h1>
          <button className="border border-black outline-none hover:bg-green-300 duration-200 px-3 py-2 cursor-pointer rounded " onClick={handleButtonToggle}>
            {enableMultipleSelection
              ? "Disable Multiple Selection"
              : "Enable Multiple Selection"}
          </button>

          <div className="item">
            <div className="content border" >
              {data && data.length > 0 ? (
                data.map((dataItem) => (
                  <div
                  className="bg-green-200 p-3 flex flex-col gap-2 cursor-pointer m-2"
                    onClick={() => {
                      handleSelection(dataItem.id);
                    }}
                  >
                    {dataItem.question}
                  
                    <div className="cursor-pointer">
                      {single === dataItem.id ||
                      multiple.includes(dataItem.id) ? (
                        <p className="text-gray-700">{"--> "+dataItem.answer}</p>
                      ) : null}
                    </div>
                  </div>
                ))
              ) : (
                <p>Data not found !</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
