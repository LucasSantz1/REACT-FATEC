import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import './Atv01.css'; 

function Atv01() {
  return (
    <div className="atividade-container">
      <h2>Atividade 01</h2>
      <Letreiro />
      <Relogio />
      <Link to="/" className="voltar-link">Voltar</Link>
    </div>
  );
}

export default Atv01;
