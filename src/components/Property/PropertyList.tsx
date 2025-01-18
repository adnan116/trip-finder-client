import React from 'react';
import { properties } from '@/utils/constants';

const PropertyList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-white text-xl font-bold text-gray-800 text-center mb-8">
        Explore Our Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            style={{ width: '550px', height: '400px', margin: '0 auto' }}
          >
            {/* Image Section */}
            <div className="relative h-2/3">
              <a href={property.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </a>
              <span className="absolute top-3 left-3 bg-blue-500 text-white text-sm font-bold py-1 px-2 rounded">
                {property.price}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-4 h-1/3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {property.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">
                    {'★'.repeat(Math.floor(property.rating))}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    ({property.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-600">{property.type}</p>
              <p className="mt-1 text-sm text-gray-500">{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
