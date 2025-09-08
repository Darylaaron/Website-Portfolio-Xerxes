import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6 px-8">
      <div className="flex items-center">
        <div className="bg-white rounded-full p-3 shadow-md">
          <span className="text-2xl font-bold text-gray-800">XSR</span>
        </div>
      </div>
    </header>
  );
};

export default Header;