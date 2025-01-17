import React from 'react';
import { properties } from '@/utils/constants';

export const PropertyList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <a href={property.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-56 object-cover"
                />
              </a>
              <span className="absolute top-2 left-2 bg-white py-1 px-2 rounded-md text-sm text-gray-700">
                {property.price}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">
                  {property.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">
                    {'★'.repeat(Math.floor(property.rating))}
                  </span>
                  <span className="ml-2 text-gray-600">
                    ({property.reviewCount} Reviews)
                  </span>
                </div>
              </div>
              <p className="mt-2 text-gray-600">{property.type}</p>
              <p className="mt-1 text-gray-500">{property.location}</p>
              <ul className="mt-3 text-sm text-gray-600">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="inline-block mr-2">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-2 bg-gray-50 text-center">
              <a
                href={property.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
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
