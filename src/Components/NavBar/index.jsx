
  import React from 'react';
  import CartWidget from '../CartWidget'
  import { NavLink } from 'react-router-dom';
  import './NavBar.css'; 
  
  function NavBar() {
    return (
      <div className="container">
        <nav className="nav">
          <div className="nav_logo">
            <NavLink className="nav_brand" to="/">FACUNDO</NavLink>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Categorias/Manuales">Manuales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Categorias/Medición">Medición</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Contacto</NavLink>
            </li>
          </ul>
          <div className="cart-link">
            <NavLink className="nav-link" to="Carrito">
              <CartWidget />
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }

export default NavBar;