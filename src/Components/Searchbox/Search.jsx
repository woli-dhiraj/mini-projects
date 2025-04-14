import React, { useEffect, useState } from "react";

function Search() {
  let [result, setResult] = useState([]);
  let [input, setInput] = useState("");
  let [showResult, setShowResult] = useState(false);
  let [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResult(cache[input]);

      return;
    }
    let response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    let json = await response.json();
    setResult(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
     <div className="cont flex justify-center items-center flex-col m-2 p-2">
     <h1 className="m-4">Search Here !</h1>
      <p>Recipes</p>
      <input
        onFocus={() => {
          setShowResult(true);
        }}
        onBlur={() => {
          setShowResult(false);
        }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Chicken tikka masala"
        className="border w-[30vw] outline-none px-2 py-1"
      />
      {input && input.length > 0 && (
        <div className="searchResult border max-h-[40vh] w-[30vw] pl-2 cursor-pointer overflow-y-scroll">
          {result.length > 0 ? (
            result.map((r) => (
              <div
                key={r.id}
                className="hover:bg-gray-200 "
                onClick={() => setInput(r.name)}
              >
                {r.name}
              </div>
            ))
          ) : (
            <p>No Recipe Found !</p>
          )}
        </div>
      )}
     </div>
    </>
  );
}
export default Search;
