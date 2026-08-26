import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ali Semir</h3>
          <p>Kaliteli ürün ve hizmetlerin güvenilir adresi</p>
        </div>

        <div className="footer-section">
          <h4>Sosyal Medya</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              📱 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              👥 Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              𝕏 Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              💼 LinkedIn
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              ▶️ YouTube
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
              🎵 TikTok
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>İletişim</h4>
          <p>📧 Email: info@alisemir.com</p>
          <p>📞 Telefon: +90 (555) 000-0000</p>
          <p>📍 Adres: İstanbul, Türkiye</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ali Semir. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
