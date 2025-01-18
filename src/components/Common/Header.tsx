import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const Header: React.FC<{
  onToggleSearchBox: () => void;
  isSearchBoxVisible: boolean;
}> = ({ onToggleSearchBox, isSearchBoxVisible }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="logo-container flex items-center space-x-6">
          <img
            src="/images/agentX.png"
            alt="Logo"
            className="w-24 h-24 object-cover rounded-full"
          />
          <span className="text-white text-3xl font-semibold">
            TripFinder AI
          </span>
        </div>

        {/* Title */}
        <div className="title-container">
          <h4 className="text-white text-2xl italic font-bold tracking-wide banner-text">
            AgentX: Your Journey Starts Here!
          </h4>
        </div>
      </div>

      {/* Centered Button */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={onToggleSearchBox}
          className="flex items-center justify-center bg-white text-blue-500 rounded-full shadow-lg w-12 h-12 hover:bg-gray-200 transition"
          aria-label="Toggle Search Box"
        >
          {isSearchBoxVisible ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaSearch className="text-xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
