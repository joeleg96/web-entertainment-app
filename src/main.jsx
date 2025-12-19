import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import React from "react";
import { BookmarkProvider } from "./context/BookmarkContext";


const basename =
  import.meta.env.MODE === "production"
    ? "/web-entertainment-app"
    : "/";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BookmarkProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </BookmarkProvider>
    </React.StrictMode>
)
