import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Ali Semir</h1>
          <p>E-Ticaret</p>
        </Link>
        
        <nav className="navbar">
          <Link to="/" className="nav-link">Anasayfa</Link>
          <Link to="/products" className="nav-link">Ürünler</Link>
          <Link to="/about" className="nav-link">Hakkında</Link>
          <Link to="/contact" className="nav-link">İletişim</Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Sepet ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
