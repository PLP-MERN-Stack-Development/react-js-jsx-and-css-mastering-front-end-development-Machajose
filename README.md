React.js + Tailwind CSS Assignment

This project is a responsive React application built with Vite and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

📋 Table of Contents

Overview

Features

Project Structure

Getting Started

Usage

API Integration

Deployment

Resources

📝 Overview

This assignment demonstrates:

Building a React app with Vite and Tailwind CSS

Creating reusable components

Implementing state management using React hooks

Integrating external APIs

Styling the application with Tailwind CSS

✨ Features

Responsive UI design using Tailwind CSS

Reusable components: Navbar, Button, Card, Loader, Footer

State management with useState and useEffect

Custom hook for API fetching

Integration with external API (JSONPlaceholder)

Multi-page routing using React Router

🗂 Project Structure
src/
├── api/             # API integration functions
│   └── fetchUsers.js
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Loader.jsx
│   └── Footer.jsx
├── context/         # React context providers (if used)
├── hooks/           # Custom React hooks
│   └── useFetch.js
├── pages/           # Page components
│   ├── Home.jsx
│   ├── UsersPage.jsx
│   └── PostsPage.jsx
├── utils/           # Utility functions
└── App.jsx          # Main application component

🚀 Getting Started
1. Clone the repository
2. Install dependencies
npm install

3. Start the development server
npm run dev


Open your browser at http://localhost:5173 to see the app.

🖥 Usage

Home Page → basic welcome and introduction

Users Page → fetches and displays users from an external API

Posts Page → demonstrates custom hook (useFetch) to fetch posts

Components → reusable UI elements used across pages

🔗 API Integration

External API used: JSONPlaceholder

API integration handled in src/api/fetchUsers.js

Fetched data displayed using reusable Card components

🌐 Deployment

The application is deployed on Vercel:

Live URL: https://your-deployed-app-url.vercel.app

📚 Resources

React Documentation

Tailwind CSS Documentation

Vite Documentation

React Router Documentation

🛠 Technologies Used

React.js

Tailwind CSS

Vite

React Router DOM

JavaScript (ES6+)

JSONPlaceholder API