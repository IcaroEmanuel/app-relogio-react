import React from 'react';
import { Link } from 'react-router-dom';

export default function Toolbar() {
  return (
    <header>
      <nav className='menu'>
        <Link to="/alarm">Alarme</Link>
        <Link to="/">Relógio</Link>
        <Link to="/timer">Cronômetro</Link> 
        <Link to="/stopwatch">Temporizador</Link>
      </nav>
    </header>
  );
}
