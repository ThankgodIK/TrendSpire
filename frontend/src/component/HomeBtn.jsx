import { Link } from "react-router-dom";

// import React from 'react'
const HomeBtn = () => {
  return (
    <div className="m-20 flex justify-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
      <button className="p-5 border border-black bg-black text-white font-medium rounded-md text-[13px] shadow-md">
        <Link to={"/Product"}>
          <h2 className="text-2xl font-medium">Discover More</h2>
        </Link>
      </button>
    </div>
  );
};

export default HomeBtn;
