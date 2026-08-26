import React, { useState } from 'react';
import '../styles/Products.css';

function Products({ addToCart }) {
  const [products] = useState([
    {
      id: 1,
      name: 'Premium Ürün 1',
      price: 299.99,
      image: '📦',
      description: 'Yüksek kaliteli, dayanıklı ve uzun ömürlü ürün'
    },
    {
      id: 2,
      name: 'Premium Ürün 2',
      price: 399.99,
      image: '⭐',
      description: 'Müşteri memnuniyeti %100 garantili ürün'
    },
    {
      id: 3,
      name: 'Ekonomik Ürün 1',
      price: 149.99,
      image: '💎',
      description: 'Uygun fiyata kaliteli seçenek'
    },
    {
      id: 4,
      name: 'Ekonomik Ürün 2',
      price: 199.99,
      image: '🎁',
      description: 'Harika fiyat-performans oranı'
    },
    {
      id: 5,
      name: 'Deluxe Ürün',
      price: 599.99,
      image: '👑',
      description: 'En üst seviye kalite ve özellikler'
    },
    {
      id: 6,
      name: 'Özel Koleksiyon',
      price: 499.99,
      image: '✨',
      description: 'Sınırlı sayıda, eksklusif ürün'
    }
  ]);

  return (
    <div className="products-page">
      <h1>Ürünlerimiz</h1>
      <p className="products-subtitle">Tüm ürünlerimiz orijinal ve garantilidir</p>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="price">{product.price.toFixed(2)} ₺</span>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
