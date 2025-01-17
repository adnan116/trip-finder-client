import React from 'react';
import { PropertyList } from '@/components/Property/PropertyList'; // Adjust path if necessary
import { SearchBox } from '@/components/SearchBox/SearchBox'; // Adjust path if necessary

const Home = () => {
  return (
    <div className="home-container flex flex-col items-center space-y-8">
      {/* Search Box Panel */}
      <div className="search-box-container w-full p-6">
        <SearchBox />
      </div>

      {/* Property List Panel */}
      <div className="property-list-container w-full px-6 pb-6">
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
