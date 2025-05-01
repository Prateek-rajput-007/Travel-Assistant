const ChatBubble = ({ text, sender }) => {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} px-2 sm:px-4`}>
      <div className={`max-w-[80%] sm:max-w-xs md:max-w-md rounded-lg p-2 sm:p-3 ${sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        <p className="text-xs sm:text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;