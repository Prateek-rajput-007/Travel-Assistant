import React from 'react';
import { ChatProvider } from './contexts/ChatContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ChatProvider>
      <div className="App bg-gray-50 min-h-screen">
        <HomePage />
      </div>
    </ChatProvider>
  );
};

export default App;
