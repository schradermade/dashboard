import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { createRoot } from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
// );

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);
