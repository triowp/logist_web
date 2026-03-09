import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import '../styles/Cart.css'

function Cart() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)
  const delivery = cart.length > 0 ? 2500 : 0

  return (
    <div className="cart">
      <Container>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <div className="cart__empty">
            <span>🛒</span>
            <p>Корзина пуста</p>
            <Link to="/catalog" style={{
              background: '#1a3a5c', color: 'white',
              padding: '12px 28px', borderRadius: '10px',
              textDecoration: 'none', fontWeight: '600'
            }}>
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="cart__layout">
            <div className="cart__items">
              {cart.map((item, i) => (
                <div className="cart__item" key={i}>
                  <div className="cart__item-info">
                    <h4>{item.name}</h4>
                    <p>{item.unit && `за ${item.unit}`}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="cart__item-price">{item.price} тг</span>
                    <button className="cart__remove" onClick={() => removeItem(i)}>✕</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__summary">
              <h3>Итого</h3>
              <div className="cart__summary-row">
                <span>Товары ({cart.length})</span>
                <span>{total} тг</span>
              </div>
              <div className="cart__summary-row">
                <span>Доставка</span>
                <span>{delivery} тг</span>
              </div>
              <div className="cart__summary-total">
                <span>К оплате</span>
                <span>{total + delivery} тг</span>
              </div>
              <button className="cart__order-btn">Оформить заказ</button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Cart