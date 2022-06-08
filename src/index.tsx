import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PortfolioContextProvider } from './context/PortfolioContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </React.StrictMode>
);
