
# ✈️ Travel Activity Chat – React Frontend Assignment

A modern, single-page React application that simulates a **travel planning chatbot** for a young couple visiting **Tokyo and Kyoto** for a 4-day trip. The app includes an engaging chat interface and a visually rich side panel with maps and activity cards.

🔗 [Live Demo](https://travel-assistant-rho.vercel.app/)  
📦 [GitHub Repository](https://github.com/Prateek-rajput-007/Travel-Assistant)

---

## 📌 Overview

This app demonstrates a 2-column layout:
- 💬 **Left Panel**: A simulated travel assistant chat (2–3 step interaction)
- 🗺️ **Right Panel**: A dynamic visual panel with maps and activity cards based on chat selections

---

## 🎯 Target Persona

- 👩‍❤️‍👨 Couple, aged 25–30  
- 🌏 First-time visitors to Japan  
- 💥 Love **adventure**, **culture**, and **history**  
- 🌸 Interested in **local experiences**, **festivals**, and **nature**

---

## 🧩 Interaction Flow

1. **Step 1**: Assistant recommends 1 unique activity in **Tokyo** and 1 in **Kyoto** based on user interests.
   - E.g.:
     - 🏎️ Tokyo: Nighttime Go-Karting in Shibuya *(Adventure + Fun)*
     - 🍵 Kyoto: Traditional Tea Ceremony in Gion *(Culture + History)*
   - ➡️ User selects one.

2. **Step 2**: Assistant shares 3 more curated activities and asks:
   > _"Would you like to confirm these activities for your 4-day trip?"_

3. ✅ Final message confirms selections and ends chat with a friendly send-off.

---

## 🖼️ Preview

![App Screenshot](./public/screenshot.png) <!-- Replace with an actual screenshot if available -->

---

## ⚙️ Tech Stack

- 🧠 **React.js** – Functional component-based SPA
- 🎨 **Tailwind CSS** – Modern utility-first styling
- 🌐 **Axios** – API request management
- 🔁 **Custom Hooks** – Gemini API wrapper for chatbot response

---

## 📁 Project Structure

```
Travel-Assistant/
├── public/
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── Chat.jsx
│   │   ├── ChatInput.jsx
│   │   ├── VisualPanel.jsx
│   │   └── ActivityCard.jsx
│   ├── hooks/
│   │   └── useGeminiAPI.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## 🧪 Getting Started

### 🔄 Clone & Run Locally

```bash
# Clone the repository
git clone https://github.com/Prateek-rajput-007/Travel-Assistant.git

# Navigate into the directory
cd Travel-Assistant

# Install dependencies
npm install

# Start the development server
npm run dev
```

📍 Visit `http://localhost:5173` in your browser to explore the app.

---

## 🤝 Contact

**Prateek Rajput**  
📧 prprateek30@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/prateek-007)  
📱 +91 9654812384

---

## 📄 License

This project is provided for interview and demonstration purposes only.
```

Would you like me to include Gemini API setup instructions or environment variable configuration too?
