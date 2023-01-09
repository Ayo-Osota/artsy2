import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuctionsProvider } from './context/auctions_context';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
    <FilterProvider>
      <AuctionsProvider>
        <App />
      </AuctionsProvider>
    </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
