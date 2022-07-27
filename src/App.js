import React from "react";

function App() {
  return (
    <div className="font-body flex justify-center items-center h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 ">
      <div className="text-center space-y-8">
        <h1 className="text-7xl font-bold ">Resume Builder!</h1>
        <p className="text-lg">
          Build and download resume quickly, <span>100%</span> free
        </p>
        <button className="p-4 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-800 text-white shadow-xl hover:shadow-none transition-all ease-in-out duration-300  font-bold rounded-lg ">
          Let's Build Resume
        </button>
      </div>
    </div>
  );
}

export default App;

// TODO: Implement Routing, and Add Input Fields
