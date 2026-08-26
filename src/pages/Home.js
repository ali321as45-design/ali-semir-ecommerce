import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Ali Semir - E-Ticaret</h1>
          <p>Kaliteli ürünler, güvenilir hizmet, uygun fiyatlar</p>
          <Link to="/products" className="cta-button">
            Ürünleri Keşfet
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-box">
          <div className="feature-icon">🚚</div>
          <h3>Hızlı Kargo</h3>
          <p>Türkiye'nin her yerine hızlı ve güvenli kargo hizmeti</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🛡️</div>
          <h3>Güvenli Alışveriş</h3>
          <p>SSL şifreli ve güvenli ödeme sistemi</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">💯</div>
          <h3>Kalite Garantisi</h3>
          <p>Tüm ürünler orijinal ve kalite kontrollü</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">💬</div>
          <h3>7/24 Destek</h3>
          <p>Sorularınız için her zaman yanınızdayız</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Hemen Başla</h2>
        <p>En iyi ürünleri en uygun fiyatlarla al</p>
        <Link to="/products" className="cta-button-large">
          Alışverişe Başla
        </Link>
      </section>
    </div>
  );
}

export default Home;
