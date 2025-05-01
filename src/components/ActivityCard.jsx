import React from 'react';
import L from 'leaflet';

// Correctly import images
import goKartImage from '../assets/images/go-kart.jpeg';
import teaCeremonyImage from '../assets/images/tea-ceremony.jpeg';
import tokyoImage from '../assets/images/tokyo.jpg';
import kyotoImage from '../assets/images/kyoto.jpeg';

const imageMap = {
  'go-kart.jpg': goKartImage,
  'tea-ceremony.jpg': teaCeremonyImage,
  'tokyo.jpg': tokyoImage,
  'kyoto.jpg': kyotoImage,
};

const ActivityCard = ({ activity }) => {
  const CustomIcon = L.divIcon({
    className: 'custom-icon',
    html: activity.type === 'adventure' ? '🏄‍♂️' : '🎎',
    iconSize: [30, 30],
  });

  // Sample content for demonstration
  const sampleActivity = {
    ...activity,
    overview: activity.overview || 'This activity offers a unique experience to explore the culture and adventure of Japan. Perfect for travelers seeking excitement and learning.',
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Left Panel: Image */}
      <div className="h-40 sm:h-auto sm:w-1/2 bg-gray-100 flex items-center justify-center">
        {sampleActivity.image && (
          <img
            src={imageMap[sampleActivity.image]}
            alt={sampleActivity.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Right Panel: Details */}
      <div className="p-4 sm:p-6 sm:w-1/2 flex flex-col justify-between">
        {/* Title and City */}
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-base sm:text-xl text-gray-800">{sampleActivity.title}</h3>
            <span className="bg-indigo-100 text-indigo-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
              {sampleActivity.city}
            </span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
            {sampleActivity.description}
          </p>
        </div>

        {/* Overview */}
        <div className="mt-4 sm:mt-6">
          <h4 className="font-semibold text-sm sm:text-md text-gray-700">Overview</h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {sampleActivity.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;