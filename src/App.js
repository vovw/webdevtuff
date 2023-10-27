import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import { useState, useEffect } from 'react';
import Gallery from './components/routes/Gallery';
import Event from './components/routes/Events';
import GLS from './components/routes/GLS';
import Team from './components/routes/Team';
import Login from './components/routes/Login';

function App() {
  return (
    <div className="App">
	  <Navbar />   
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gls" element={<GLS />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
    </Routes>
	  <Home />

    </div>
  );
}

export default App;
