import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

import { WishListProvider, CartProvider } from './context'

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
