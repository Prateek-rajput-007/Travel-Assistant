import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your travel assistant for your Japan trip. Let me suggest some activities for your 4-day trip to Tokyo and Kyoto!",
      sender: 'bot',
    },
  ]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { id: Date.now(), text, sender }]);
  };

  const addActivity = (activity) => {
    setSelectedActivities(prev => [...prev, activity]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      addMessage,
      selectedActivities,
      addActivity,
      currentStep,
      setCurrentStep,
      confirmed,
      setConfirmed
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);