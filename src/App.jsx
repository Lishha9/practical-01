import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-6">
      
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 text-center text-white">
        
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-medium tracking-wide">
            React + Tailwind CSS
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Welcome to React
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
          My First React Application
        </h2>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-4">
          This is a simple React application created using JSX and
          functional components.
        </p>

        <p className="text-lg text-white/80 leading-relaxed mb-8">
          React makes it easy to build beautiful and interactive user
          interfaces.
        </p>

        <button className="px-7 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300">
          Get Started
        </button>

      </div>
    </div>
  );
}

export default App;