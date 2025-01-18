import React from 'react';
import Header from '@/components/Common/Header'; // Adjust path if necessary
import PropertyList from '@/components/Property/PropertyList'; // Adjust path if necessary
import SearchBox from '@/components/SearchBox/SearchBox'; // Adjust path if necessary

const Home = () => {
  return (
    <div className="home-container flex flex-col">
      {/* Header */}
      <div className="header-container fixed top-0 w-full z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="main-content pt-20 flex flex-col items-center space-y-8">
        {/* Search Box Panel */}
        <div className="search-box-container w-full p-6">
          <SearchBox />
        </div>

        {/* Property List Panel */}
        <div
          className="property-list-container w-full px-6 pb-6 bg-cover bg-center flex items-center justify-center">
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
