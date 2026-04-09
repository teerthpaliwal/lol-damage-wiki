import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DamageTypes from './pages/DamageTypes';
import Modifiers from './pages/Modifiers';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>LoL Damage Wiki</h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/damage" element={<DamageTypes />} />
          <Route path="/modifiers" element={<Modifiers />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;