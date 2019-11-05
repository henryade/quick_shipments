import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Router from '../Router';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Router />
    </div>
  </BrowserRouter>
);

export default App;
