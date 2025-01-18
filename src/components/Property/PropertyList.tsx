import React from 'react';
import { properties } from '@/utils/constants';

const PropertyList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-white text-xl font-bold text-gray-800 text-center mb-8">
        Explore Our Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative">
              <a href={property.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-60 object-cover"
                />
              </a>
              <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded">
                {property.price}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-5">
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

              <p className="mt-2 text-sm text-gray-600">{property.type}</p>
              <p className="mt-1 text-sm text-gray-500">{property.location}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {property.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
              <a
                href={property.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition-colors duration-200"
              >
                View Availability
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
