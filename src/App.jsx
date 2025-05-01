import 'leaflet/dist/leaflet.css';
import React from 'react';
import { ChatProvider } from './contexts/ChatContext';
import HomePage from './pages/HomePage';

const App = () => {
  const additionalPrompt = `Suggest 5 unique cultural experiences in Japan for a family with kids. Include brief descriptions and locations.`; // Pass this prompt to useGeminiAPI wherever needed.
  return (
    <ChatProvider>
      <div className="App bg-gray-50 min-h-screen">
        <HomePage additionalPrompt={additionalPrompt} />
      </div>
    </ChatProvider>
  );
};

export default App;