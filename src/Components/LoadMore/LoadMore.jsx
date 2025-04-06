import React, { useEffect, useState } from "react";

function LoadMore() {
  let [imageData, setImageData] = useState([]);
  let limit = 8;
  let [page, setPage] = useState(1);
  let [isLoading, setIsLoading] = useState(false);
  let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(url);
        let data = await response.json();
        setImageData((prev) => (page === 1 ? data : [...prev, ...data]));
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page]);

  let handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  let handleRemoveProduct = () => {
    if (imageData.length > limit) {
      setImageData((prev) => prev.slice(0, -limit));
    }
  };

  return (
    <div className="w-full p-4">
     <h1 className="text-center p-2 m-2 text-2xl font-semibold">E-Shop Product Expander</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {imageData.map((img) => (
          <div key={img.id} className="overflow-hidden">
            <img
              src={img.download_url}
              alt="Image"
              className="h-[30vh] w-full object-cover"
            />
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-[10vh]">
          <p className="text-green-500 font-bold text-lg">Loading...</p>
        </div>
      )}

    
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handleLoadMore}
          className="border px-4 py-2 rounded bg-green-500 cursor-pointer text-white shadow-md hover:bg-green-600"
        >
          Load More
        </button>
        <button
          onClick={handleRemoveProduct}
          className="border px-4 py-2 rounded cursor-pointer bg-red-500 text-white shadow-md hover:bg-red-600"
        >
          Remove Product
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
