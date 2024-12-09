import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PharmaPage from"./pages/coursePage/pharmaPage";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<PharmaPage />} />
      </Routes>
    </div>
  );
}

export default App;
