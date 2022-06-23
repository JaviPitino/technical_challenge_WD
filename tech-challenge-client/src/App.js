import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PhonesList from './pages/PhonesList';
import Navbar from './components/Navbar';
import PhoneDetails from './components/PhoneDetails'

function App() {
  return (
    <div className="App">
      <Navbar />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" end={true} element={<PhonesList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
     </Routes>
    </div>
  );
}

export default App;
