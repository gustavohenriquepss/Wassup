
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/config'
import { ThemeProvider } from './providers/ThemeProvider'

// Initialize the root element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Get the system preference for theming
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem("theme");

// Set initial theme class on the html element before render
document.documentElement.classList.remove("light", "dark");
document.documentElement.classList.add(savedTheme === "light" ? "light" : "dark");

// Render the app
createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
