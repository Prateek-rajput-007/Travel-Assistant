import React, { useState } from 'react';
import { useChat } from '../contexts/ChatContext';
import { useGeminiAPI } from '../hooks/useGeminiAPI';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { messages, addMessage, addActivity, currentStep, setCurrentStep, setConfirmed } = useChat();
  const { generateContent } = useGeminiAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add user message
    addMessage(input, 'user');
    setInput('');

    // Bot response logic
    if (currentStep === 1) {
      // Initial activity suggestions
      setTimeout(() => {
        addMessage("For your trip to Japan, I'd suggest these activities:", 'bot');
        
        const tokyoActivity = {
          id: 1,
          city: 'Tokyo',
          title: 'Nighttime Go-Karting in Shibuya',
          description: 'Experience the thrill of driving go-karts through the streets of Shibuya dressed as your favorite character!',
          image: 'go-kart.jpg',
          type: 'adventure',
          coordinates: [35.6595, 139.7005]
        };
        
        const kyotoActivity = {
          id: 2,
          city: 'Kyoto',
          title: 'Tea Ceremony in Gion',
          description: 'Participate in a traditional Japanese tea ceremony in the historic Gion district.',
          image: 'tea-ceremony.jpg',
          type: 'culture',
          coordinates: [35.0036, 135.7781]
        };
        
        addMessage(`1. ${tokyoActivity.title} (${tokyoActivity.city}) - ${tokyoActivity.description}`, 'bot');
        addMessage(`2. ${kyotoActivity.title} (${kyotoActivity.city}) - ${kyotoActivity.description}`, 'bot');
        addMessage("Which of these activities appeals to you more?", 'bot');
        addMessage("Please respond with '1' or '2' to choose one of the suggested activities.", 'bot');
        
        addActivity(tokyoActivity);
        addActivity(kyotoActivity);
        setCurrentStep(2);
      }, 1000);
    } else if (currentStep === 2) {
      // Handle activity selection
      const lowerInput = trimmedInput.toLowerCase();

      if (lowerInput === '1' || lowerInput === '2') {
        const chosenTitle = lowerInput === '1'
          ? 'Nighttime Go-Karting in Shibuya'
          : 'Tea Ceremony in Gion';

        addMessage(`Thanks for choosing "${chosenTitle}"!`, 'bot');

        setTimeout(async () => {
          try {
            const prompt = `A young couple (25-30) visiting Japan for 4 days likes ${chosenTitle}. 
            They enjoy adventure, culture, and history. Suggest 3 more activities for their itinerary 
            (2 in Tokyo, 1 in Kyoto) with brief descriptions. Format as bullet points. and in short sentences.`;

            const response = await generateContent(prompt);

            // Format the response into a structured list
            const formattedResponse = response
              .split('*')
              .filter(item => item.trim()) // Remove empty items
              .map(item => `- ${item.trim()}`) // Format as a list
              .join('\n');

            addMessage("Based on your preferences, here are more suggestions:", 'bot');
            addMessage(formattedResponse, 'bot');
          } catch (error) {
            addMessage("Sorry, I couldn't process your request. Please try again.", 'bot');
          } finally {
            addMessage("Would you like to confirm these activities for your trip?", 'bot');
            setCurrentStep(3);
          }
        }, 1000);

      } else {
        addMessage("Please respond with '1' or '2' to choose one of the suggested activities.", 'bot');
      }
    } else if (currentStep === 3) {
      // Final confirmation
      const lowerInput = trimmedInput.toLowerCase();

      if (['yes', 'confirm', 'sure', 'ok', 'okay', 'yep'].includes(lowerInput)) {
        addMessage("Great! Your activities have been confirmed. Have a wonderful trip to Japan!", 'bot');
        setConfirmed(true);
      } else if (['no', 'not now', 'later'].includes(lowerInput)) {
        addMessage("No problem! Let me know if you'd like to adjust your itinerary.", 'bot');
      } else {
        addMessage("I didn’t catch that. Please type 'yes' to confirm or 'no' to make changes.", 'bot');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
