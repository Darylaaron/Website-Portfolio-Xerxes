import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RedesignedHomePage from "./pages/RedesignedHomePage";
import { ToggleLeft, ToggleRight } from "lucide-react";

function App() {
  const [showRedesign, setShowRedesign] = useState(false);

  return (
    <div className="App">
      {/* Design Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowRedesign(!showRedesign)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg ${
            showRedesign 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
              : 'bg-white text-gray-800 border border-gray-300'
          }`}
        >
          {showRedesign ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
          <span>{showRedesign ? 'Redesigned' : 'Original'}</span>
        </button>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={showRedesign ? <RedesignedHomePage /> : <HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;