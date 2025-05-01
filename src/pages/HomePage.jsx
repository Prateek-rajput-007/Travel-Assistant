import React from 'react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import VisualPanel from '../components/VisualPanel';
import { useChat } from '../contexts/ChatContext';

const HomePage = () => {
  const { messages, selectedActivities, confirmed } = useChat();

  return (
    <div className="flex h-full w-full">
      {/* Chat Panel - Left Column */}
      <div className="w-1/2 h-full border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-700">Japan Travel Assistant</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatBubble 
              key={message.id} 
              text={message.text} 
              sender={message.sender} 
            />
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <ChatInput />
        </div>
      </div>
      
      {/* Visual Panel - Right Column */}
      <div className="w-1/2 h-full">
        <VisualPanel 
          activities={selectedActivities} 
          confirmed={confirmed} 
        />
      </div>
    </div>
  );
};

export default HomePage;