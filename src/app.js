import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
