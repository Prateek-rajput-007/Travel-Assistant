
import { useState } from 'react';
import axios from 'axios';


const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

export const useGeminiAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateContent = async (prompt) => {
    setLoading(true);
    setError(null);

    if (!GEMINI_API_KEY) {
      setError('API key is missing. Make sure VITE_GEMINI_API_KEY is set in your .env file.');
      setLoading(false);
      console.error('API key is missing.');
      return "Sorry, API configuration is missing.";
    }

    try {
     
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
       
        generationConfig: {
            temperature: 0.7,
            candidateCount: 1,
        }
      };

      console.log('Requesting Gemini API at:', API_URL); // Log URL (without key ideally in production logs)
      console.log('Request Body:', JSON.stringify(requestBody, null, 2)); // Log formatted request body

      const response = await axios.post(API_URL, requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response Status:', response.status);
      console.log('API Response Data:', response.data); // Log the full API response data

     
      const generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        return generatedText;
      } else {
        // Log the structure if text is not found where expected
        console.error('Unexpected response structure. Generated text not found:', response.data);
        throw new Error('Unexpected response structure from Gemini API.');
      }
    } catch (err) {
      let errorMessage = "Sorry, I couldn't process your request. Please try again.";
      console.error('Gemini API error:', err);

      if (err.response) {
        // Log detailed error from the API if available
        console.error('Error Response Status:', err.response.status);
        console.error('Error Response Data:', err.response.data);
        // Provide more specific feedback if possible
        if (err.response.status === 400) {
             errorMessage = `Error: Invalid request. Details: ${err.response.data?.error?.message || 'Check console.'}`;
        } else if (err.response.status === 401 || err.response.status === 403) {
             errorMessage = `Error: Authentication failed. Check your API key. Details: ${err.response.data?.error?.message || 'Check console.'}`;
        } else if (err.response.status === 404) {
             errorMessage = `Error: API endpoint or model not found. Check the URL. Details: ${err.response.data?.error?.message || 'Check console.'}`;
        } else if (err.response.status === 429) {
             errorMessage = `Error: Rate limit exceeded. Please wait and try again. Details: ${err.response.data?.error?.message || 'Check console.'}`;
        } else {
             errorMessage = `Error: Received status ${err.response.status}. Details: ${err.response.data?.error?.message || 'Check console.'}`;
        }

      } else if (err.request) {
        // The request was made but no response was received
        console.error('Error Request:', err.request);
        errorMessage = "Sorry, couldn't connect to the API. Please check your network.";
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error Message:', err.message);
        errorMessage = `Sorry, an error occurred: ${err.message}`;
      }

      setError(errorMessage); 
      return errorMessage; // Return the formatted error message to be displayed in chat
    } finally {
      setLoading(false);
    }
  };

  return { generateContent, loading, error };
};