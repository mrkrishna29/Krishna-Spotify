import React, { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import { useEffect } from "react";
// import { Linter } from "eslint";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumId)].bgColor;
  console.log(bgcolor)

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg: [75%] ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
