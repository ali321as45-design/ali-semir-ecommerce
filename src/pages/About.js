import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Ali Semir Hakkında</h1>
        <p>Türkiye'nin güvenilir e-ticaret platformu</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Biz Kimiz?</h2>
          <p>
            Ali Semir, 2020 yılından beri müşteri memnuniyetini ön planda tutarak 
            kaliteli ürünler sunmaktadır. Türkiye'nin dört bir yanına hizmet veren 
            platformumuz, binlerce mutlu müşteriye sahiptir.
          </p>
        </div>

        <div className="about-section">
          <h2>Misyonumuz</h2>
          <p>
            Her müşteriye en iyi alışveriş deneyimini sağlamak, kaliteli ve orijinal 
            ürünleri uygun fiyatlarla ulaştırmak ve güvenilir bir alışveriş ortamı 
            oluşturmaktır.
          </p>
        </div>

        <div className="about-section">
          <h2>Vizyonumuz</h2>
          <p>
            Türkiye'nin en yaygın ve güvenilir e-ticaret platformu olmak, müşteri 
            memnuniyeti ile sektörde öncü rol oynamak ve inovasyon ile hizmet 
            kalitesini sürekli geliştirmektir.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Mutlu Müşteri</p>
          </div>
          <div className="stat">
            <h3>5,000+</h3>
            <p>Ürün Çeşidi</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Müşteri Desteği</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Orijinal Ürün</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
