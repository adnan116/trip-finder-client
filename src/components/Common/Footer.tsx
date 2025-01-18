import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white py-12 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/agentX.png" // Correct path for public assets
            alt="AgentX Logo"
            className="w-36 h-36 object-cover rounded-full shadow-lg"
          />
          <h2 className="text-4xl font-extrabold text-white">AgentX</h2>
        </div>

        {/* Purpose */}
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-center md:text-left text-justify px-4 md:px-0">
            <strong>AgentX</strong> is a cutting-edge, interactive travel
            assistant designed with advanced natural language processing
            capabilities. It empowers users to effortlessly plan their journeys
            by understanding their travel preferences and providing personalized
            recommendations. Whether you're looking for answers to specific
            travel questions or curating your dream itinerary,{' '}
            <strong>AgentX</strong> ensures a seamless and enjoyable experience
            throughout the entire travel planning process.
          </p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="w-full mt-8 border-t-2 border-white opacity-30"></div>

      {/* Footer Text */}
      <div className="text-center mt-4">
        <p className="text-sm font-medium opacity-70">
          &copy; {new Date().getFullYear()} AgentX. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
