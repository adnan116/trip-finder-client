import React, { useState } from 'react';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import PropertyList from '@/components/Property/PropertyList';
import SearchBox from '@/components/SearchBox/SearchBox';

const Home: React.FC = () => {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(true);

  const toggleSearchBox = () => {
    setIsSearchBoxVisible((prev) => !prev);
  };

  return (
    <div className="home-container flex flex-col items-center">
      {/* Header */}
      <Header
        onToggleSearchBox={toggleSearchBox}
        isSearchBoxVisible={isSearchBoxVisible}
      />

      {/* SearchBox */}
      {isSearchBoxVisible && <SearchBox onHide={toggleSearchBox} />}

      {/* Property List */}
      <div
        className="property-list-container px-6 pb-6 bg-cover bg-center flex items-center justify-center"
        style={{
          marginTop: '120px',
        }}
      >
        <PropertyList />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
