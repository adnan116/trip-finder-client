import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="logo-container flex items-center space-x-6">
          <img
            src="/images/agentX.png" // Correct path for public assets
            alt="Logo"
            className="w-24 h-24 object-cover rounded-full" // Even larger size
          />
          <span className="text-white text-3xl font-semibold">
            TripFinder AI
          </span>
        </div>

        {/* Title */}
        <div className="title-container">
          <h4 className="text-white text-2xl italic font-bold tracking-wide">
            Smart Solutions, Smarter Future!
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
