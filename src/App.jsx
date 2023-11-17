import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, UserProfile } from "./Pages/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
