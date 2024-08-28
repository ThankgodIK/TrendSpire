import { Link } from "react-router-dom";

// import React from 'react'
const Navbar2 = () => {
  return (
    <nav className="text-3xl flex justify-center font-semibold  mb-2 ">
      <div className="flex justify-center gap-9">
        <Link className=" hover:border-b-2 border-black" to={"/Women"}>
          Women
        </Link>
        <Link className=" hover:border-b-2 border-black" to={"/Men"}>
          Men
        </Link>
        <Link className=" hover:border-b-2 border-black" to={"/Unisex"}>
          Unisex
        </Link>
        <Link className=" hover:border-b-2 border-black" to={"/Kids"}>
          Children
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
