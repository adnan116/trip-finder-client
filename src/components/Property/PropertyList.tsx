import React, { useState } from 'react';
import { properties } from '@/utils/constants';
import { FaSun, FaCloud, FaCloudRain, FaBolt } from 'react-icons/fa';

interface WeatherInfo {
  temp: number;
  description: string;
  icon: React.JSX.Element;
  windSpeed: number;
  humidity: number;
  pressure: number;
  location: string;
}

const fetchWeather = async (
  latitude: number,
  longitude: number,
  location: string,
): Promise<WeatherInfo> => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();

  if (data.current_weather) {
    const currentHour = new Date().getHours();

    return {
      temp: data.current_weather.temperature,
      description: getWeatherDescription(data.current_weather.weathercode),
      icon: getWeatherIcon(data.current_weather.weathercode),
      windSpeed: data.current_weather.windspeed,
      humidity: data.hourly.relativehumidity_2m[currentHour],
      pressure: data.hourly.pressure_msl
        ? data.hourly.pressure_msl[currentHour]
        : 0,
      location: location,
    };
  } else {
    throw new Error('Invalid weather data structure');
  }
};

const getWeatherIcon = (weatherCode: number) => {
  switch (true) {
    case weatherCode === 0:
      return <FaSun className="text-yellow-500" />;
    case weatherCode >= 1 && weatherCode <= 3:
      return <FaCloud className="text-gray-600" />;
    case weatherCode >= 51 && weatherCode <= 67:
      return <FaCloudRain className="text-blue-500" />;
    case weatherCode >= 95 && weatherCode <= 99:
      return <FaBolt className="text-yellow-400" />;
    default:
      return <FaCloud className="text-gray-500" />;
  }
};

const getWeatherDescription = (weatherCode: number) => {
  switch (true) {
    case weatherCode === 0:
      return 'Clear sky';
    case weatherCode >= 1 && weatherCode <= 3:
      return weatherCode === 1 ? 'Partly cloudy' : 'Mostly cloudy';
    case weatherCode >= 51 && weatherCode <= 67:
      return weatherCode <= 55 ? 'Light rain' : 'Moderate rain';
    case weatherCode >= 95 && weatherCode <= 99:
      return 'Thunderstorm';
    default:
      return 'Unknown weather';
  }
};

const PropertyList: React.FC = () => {
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
  const [weatherError, setWeatherError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseEnter = async (
    propertyId: string,
    latitude: number,
    longitude: number,
    location: string,
  ) => {
    setHoveredProperty(propertyId);
    setIsLoading(true);

    try {
      const weather = await fetchWeather(latitude, longitude, location);
      setWeatherInfo(weather);
      setWeatherError(null);
    } catch (error) {
      setWeatherError(
        error instanceof Error ? error.message : 'Failed to fetch weather data',
      );
      setWeatherInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProperty(null);
    setWeatherInfo(null);
    setWeatherError(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Explore Our Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
            style={{ width: '550px', height: '400px', margin: '0 auto' }}
            onMouseEnter={() =>
              handleMouseEnter(
                property.id,
                property.latitude,
                property.longitude,
                property.location,
              )
            }
            onMouseLeave={handleMouseLeave}
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

            {/* Weather Tooltip */}
            {hoveredProperty === property.id && (
              <div className="absolute top-0 right-0 mt-4 mr-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                  </div>
                ) : weatherError ? (
                  <div className="text-red-500">
                    <p className="text-sm font-bold">
                      Weather Info Unavailable
                    </p>
                    <p className="text-sm">{weatherError}</p>
                  </div>
                ) : (
                  weatherInfo && (
                    <div className="flex items-center">
                      {weatherInfo.icon}
                      <div className="ml-2">
                        <p className="text-sm font-bold mb-1">
                          {weatherInfo.location}
                        </p>
                        <p className="text-sm font-medium">
                          {weatherInfo.description}
                        </p>
                        <p className="text-sm">{weatherInfo.temp}°C</p>
                        <p className="text-sm">
                          Wind: {weatherInfo.windSpeed} km/h
                        </p>
                        <p className="text-sm">
                          Humidity: {weatherInfo.humidity}%
                        </p>
                        {weatherInfo.pressure > 0 && (
                          <p className="text-sm">
                            Pressure: {weatherInfo.pressure} hPa
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* View Availability Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a
                href={property.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg text-center text-sm hover:bg-blue-600 transition-colors"
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
