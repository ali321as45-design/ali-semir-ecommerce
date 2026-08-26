import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>İletişim</h1>
        <p>Sorularınız ve önerileriniz için bize ulaşın</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Bizimle İletişime Geçin</h2>
          
          <div className="info-box">
            <h3>📧 Email</h3>
            <p>info@alisemir.com</p>
            <p>destek@alisemir.com</p>
          </div>

          <div className="info-box">
            <h3>📞 Telefon</h3>
            <p>+90 (555) 000-0000</p>
            <p>+90 (555) 111-1111</p>
          </div>

          <div className="info-box">
            <h3>📍 Adres</h3>
            <p>Ali Semir Ticaret Ltd. Şti.</p>
            <p>İstanbul, Türkiye</p>
          </div>

          <div className="info-box">
            <h3>🕐 Çalışma Saatleri</h3>
            <p>Pazartesi - Cuma: 09:00 - 18:00</p>
            <p>Cumartesi: 10:00 - 16:00</p>
            <p>Pazar: Kapalı</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Mesaj Gönderin</h2>
          
          <div className="form-group">
            <label htmlFor="name">Adınız *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Adresiniz *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ornek@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Konu *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Mesajın konusu"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Mesajınızı yazın..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Mesaj Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
