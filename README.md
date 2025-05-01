
```markdown
# 🌏 Travel Activity Chat – Frontend Assignment

A single-page React app that simulates a travel recommendation chat experience for a young couple visiting Japan (Tokyo and Kyoto) for 4 days. The app mimics a guided travel assistant that offers chat-based recommendations along with visual context like maps and activity cards.

## 🚀 Live Demo

👉 [Live App](https://travel-assistant-rho.vercel.app/)  
📂 [GitHub Repo](https://github.com/Prateek-rajput-007/Travel-Assistant)

---

## 📸 Preview

![App Preview](./public/screenshot.png) <!-- Add an actual screenshot if available -->

---

## ✨ Features

- 📱 **Chat interface** simulating a fixed two-step conversation
- 🗺️ **Visual activity panel** showcasing suggested activities with photos
- 🎯 Recommendations tailored to user persona (young couple, first-time Japan visit)
- ✅ Activity confirmation prompt for trip finalization
- 💬 Clean, interactive layout mimicking a travel assistant

---

## 👥 User Persona

- Age: 25–30
- First-time visitors to Japan
- Interests: **Adventure**, **Culture**, **History**
- Open to: Local experiences, festivals, nature-based adventures

---

## 💬 Chat Flow

### Step 1:  
Suggests 2 contrasting activities:

- **Tokyo**: Nighttime Go-Karting in Shibuya *(Adventure + Fun)*
- **Kyoto**: Tea Ceremony in a historic Gion teahouse *(Culture + History)*

> Asks user which one they prefer.

---

### Step 2:  
Based on user's choice (e.g., Go-Karting), it shows **3 more matching suggestions** like:

- Hiking Mt. Takao  
- Participating in a Kimono dress-up session  
- Visiting the Arashiyama Bamboo Grove

> Asks: _"Would you like to confirm these activities for your trip?"_

---

### Step 3:  
Final message confirms the plan and wishes the couple a great trip!

---

## 🧱 Tech Stack

- **React.js** – SPA structure and state management
- **Tailwind CSS** – Styling and responsive layout
- **Custom Hooks** – API integration (Gemini / fallback messaging)
- **Axios** – HTTP request handling

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Chat.jsx
│   ├── ChatInput.jsx
│   ├── VisualPanel.jsx
│   └── ActivityCard.jsx
├── hooks/
│   └── useGeminiAPI.jsx
├── assets/
├── App.jsx
├── index.js
```

---

## 🧪 Run Locally

To run this project on your machine:

```bash
# Clone the repository
git clone https://github.com/Prateek-rajput-007/Travel-Assistant.git

# Navigate to the project directory
cd Travel-Assistant

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then, open [http://localhost:5173](http://localhost:5173) in your browser.
