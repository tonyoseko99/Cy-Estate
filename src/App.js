import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Houses from "./components/Houses";
import House from "./components/House";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/house/:id" element={<House />} />
        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
