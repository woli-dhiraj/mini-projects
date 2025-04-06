import React, { useState } from "react";
import data from "./Data";

import folderIcon from "../../assets/folder.png";
import fileIcon from "../../assets/file.png";

const List = ({ item, expand, setExpand }) => {
  return (
    <>
   
    <div className="dataCont m-3 p-2">
      
      {item.map((node) => (
        <div
          key={node.id}
          className="px-3 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setExpand((prev) => ({
              ...prev,
              [node.id]: !prev[node.id],
            }));
          }}
        >


          {node.isFolder ? (
            <img src={folderIcon} className="h-5 w-5 inline-block m-1" alt="folder icon"></img>
          ) : (
            <img src={fileIcon} className="h-5 w-5 inline-block" alt="file icon"></img>
          )}


          <span>{node.name}</span>

          {expand[node.id] && (
            <div>
              {node.Children && (
                <List
                  item={node.Children}
                  expand={expand}
                  setExpand={setExpand}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

function FileStructure() {
  let [fileData, setFileData] = useState(data);
  let [isExpand, setIsExpand] = useState({});
  return (
    <>
      <div>
      <h1 className="m-2 p-2 text-2xl font-bold">File and Folder Structure </h1>
        <List item={fileData} expand={isExpand} setExpand={setIsExpand} />
      </div>
    </>
  );
}

export default FileStructure;
