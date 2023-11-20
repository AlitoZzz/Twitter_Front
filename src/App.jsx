import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, UserProfile } from "./Pages/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/:username" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
