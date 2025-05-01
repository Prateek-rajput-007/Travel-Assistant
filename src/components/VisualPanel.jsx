import ActivityCard from './ActivityCard';
import tokyoImage from '../assets/images/japan.jpg'; 

const VisualPanel = ({ activities, confirmed }) => {
  const defaultActivity = {
    id: 'default',
    city: 'Tokyo',
    title: 'Welcome to Tokyo!',
    description: 'Explore the vibrant city of Tokyo, filled with culture, adventure, and amazing food.',
    image: 'tokyo.jpg',
    type: 'default',
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-indigo-700">
          {confirmed ? "Your Confirmed Itinerary" : "Suggested Activities"}
        </h2>
      </div>
      <div className="flex-1 overflow-hidden">
        {confirmed ? (
          <div className="h-full flex items-center justify-center p-6 text-center">
            <div className="max-w-lg w-full">
              <img
                src={tokyoImage}
                alt="Tokyo"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Thank you for confirming your itinerary!
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                We hope you have an amazing trip to Japan. Your selected activities are now confirmed, and you can look forward to an unforgettable experience. If you need further assistance or want to make changes, feel free to reach out anytime.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Safe travels and enjoy your adventure!
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto p-4 grid grid-cols-1 gap-4">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <ActivityCard key={`${activity.id}-${index}`} activity={activity} />
              ))
            ) : (
              <ActivityCard activity={defaultActivity} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualPanel;
