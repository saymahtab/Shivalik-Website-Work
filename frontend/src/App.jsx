import "./App.css";
import React , {useState , useEffect}  from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
