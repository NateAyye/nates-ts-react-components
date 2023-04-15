import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';
import { NatesThemeProvider } from './themes/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NatesThemeProvider>
        <App />
      </NatesThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
