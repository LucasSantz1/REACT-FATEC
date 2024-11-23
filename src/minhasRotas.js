// minhasRotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Atv01 from './Atv01';
import Atv02 from './Atv02';
import Atv03 from './Atv03';
import Atv04 from './Atv04';
import './minhasRotas.css';

function MinhasRotas() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1 className="logo">React-Fatec</h1>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/Atv01">Atividade 01</Link></li>
            <li><Link to="/Atv02">Atividade 02</Link></li>
            <li><Link to="/Atv03">Atividade 03</Link></li>
            <li><Link to="/Atv04">Atividade 04</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Atv01" element={<Atv01 />} />
            <Route path="/Atv02" element={<Atv02 />} />
            <Route path="/Atv03" element={<Atv03 />} />
            <Route path="/Atv04" element={<Atv04 />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Feito por: Lucas Sant Anna Silva</p>
        </footer>
      </div>
    </Router>
  );
}

export default MinhasRotas;
