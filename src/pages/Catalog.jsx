import { useEffect, useState } from 'react'
import Container from '../components/Container'
import '../styles/Catalog.css'

const mockProducts = [
  { id: 1, name: 'Томатная паста', price: 480, unit: 'кг', icon: '🥫', category: 'Консервация' },
  { id: 2, name: 'Подсолнечное масло', price: 1200, unit: 'л', icon: '🧴', category: 'Масла' },
  { id: 3, name: 'Рис длиннозерный', price: 320, unit: 'кг', icon: '🌾', category: 'Крупы' },
  { id: 4, name: 'Мука пшеничная', price: 180, unit: 'кг', icon: '🌾', category: 'Крупы' },
  { id: 5, name: 'Сахар белый', price: 260, unit: 'кг', icon: '🧂', category: 'Бакалея' },
  { id: 6, name: 'Соль поваренная', price: 80, unit: 'кг', icon: '🧂', category: 'Специи' },
]

function Catalog() {
  const [products, setProducts] = useState(mockProducts)
  const [search, setSearch] = useState('')
  const [added, setAdded] = useState({})

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => { if (data.length) setProducts(data) })
      .catch(() => {})
  }, [])

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  return (
    <div className="catalog">
      <Container>
        <div className="catalog__header">
          <h2>Каталог товаров</h2>
          <input
            className="catalog__search"
            type="text"
            placeholder="🔍  Поиск товаров..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="catalog__grid">
          {filtered.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-card__img">{p.icon || '📦'}</div>
              <div className="product-card__body">
                <div className="product-card__tag">{p.category}</div>
                <h3>{p.name}</h3>
                <div className="product-card__price">
                  {p.price} тг <span>/ {p.unit}</span>
                </div>
                <button
                  className="product-card__btn"
                  onClick={() => addToCart(p)}
                >
                  {added[p.id] ? '✓ Добавлено!' : 'В корзину'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Catalog