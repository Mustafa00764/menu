import './index.css'
import React from "react";

import App from './App.tsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './contexts/ProductContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
