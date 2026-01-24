import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// NEW FONT: Nunito (Replacing Lato/Playfair for Body/Headings as requested)
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
// Keeping Playfair just for specific accents if needed, otherwise Nunito takes over
import '@fontsource/playfair-display/400.css'; 
import '@fontsource/playfair-display/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)