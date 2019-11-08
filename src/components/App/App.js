import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Router from '../Router';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
  </BrowserRouter>
);

export default App;
