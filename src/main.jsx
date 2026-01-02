import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import React from "react";
import { BookmarkProvider } from "./context/BookmarkContext";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BookmarkProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </BookmarkProvider>
    </React.StrictMode>
)