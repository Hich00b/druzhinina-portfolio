import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// FONTS: Import ALL weights to ensure Menu looks correct
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css'; // Bold
import '@fontsource/nunito/800.css'; // ExtraBold (Used in Menu)
import '@fontsource/nunito/900.css'; // Black

// Display font (optional, keep just in case)
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)