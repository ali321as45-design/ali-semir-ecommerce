import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h1>Alışveriş Sepeti</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Sepetiniz boş</p>
          <Link to="/products" className="continue-shopping">
            Alışverişe Devam Et
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Ürün</th>
                <th>Fiyat</th>
                <th>Miktar</th>
                <th>Toplam</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td className="product-name">
                    <span className="product-icon">{item.image}</span>
                    {item.name}
                  </td>
                  <td>{item.price.toFixed(2)} ₺</td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td className="item-total">{(item.price * item.quantity).toFixed(2)} ₺</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️ Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="summary-box">
              <h3>Sipariş Özeti</h3>
              <div className="summary-line">
                <span>Ara Toplam:</span>
                <span>{total.toFixed(2)} ₺</span>
              </div>
              <div className="summary-line">
                <span>Kargo:</span>
                <span>Ücretsiz</span>
              </div>
              <div className="summary-line total-line">
                <span>Genel Toplam:</span>
                <span>{total.toFixed(2)} ₺</span>
              </div>
              <button className="checkout-btn">Ödemeye Geç</button>
              <Link to="/products" className="continue-shopping-link">
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
