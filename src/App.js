import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="font-body flex justify-center items-center h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 animate-backgroundAnimation ">
      <div className="text-center space-y-6">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
          Resume Builder!
        </h1>
        <p className="text-[16px] sm:text-lg md:text-lg lg:text-lg">
          Build and download resume quickly, <span>100%</span> free
        </p>
        <Link to="/resume">
          <button className="p-4 my-6 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-800 text-white font-bold rounded-lg shadow-xl hover:shadow-none transition-all ease-in-out duration-300  ">
            Let's Build Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
