import React from 'react';
import ReactDOM from 'react-dom/client';
import AddBookmarkPage from './components/addBookmarkContainer/addBookmarkPage';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddBookmarkPage/>
  </React.StrictMode>
);
