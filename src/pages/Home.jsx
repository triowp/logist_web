import { Link } from 'react-router-dom'
import Container from '../components/Container'
import '../styles/Home.css'

const features = [
  { icon: '🚚', title: 'Быстрая доставка', desc: 'Доставляем товар прямо на склад вашего магазина в кратчайшие сроки' },
  { icon: '💰', title: 'Оптовые цены', desc: 'Лучшие цены напрямую от производителей без посредников' },
  { icon: '✅', title: 'Проверенные поставщики', desc: 'Каждый поставщик проходит верификацию перед допуском на платформу' },
]

const categories = [
  { icon: '🥫', name: 'Консервация' },
  { icon: '🧈', name: 'Масла и жиры' },
  { icon: '🌾', name: 'Крупы и злаки' },
  { icon: '🧂', name: 'Специи' },
  { icon: '🥤', name: 'Напитки' },
  { icon: '🧴', name: 'Бытовая химия' },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="home__hero">
        <Container>
          <div className="home__hero-badge">B2B Платформа оптовых закупок</div>
          <h1>Закупайте товары <span>быстро</span> и выгодно</h1>
          <p>Соединяем поставщиков и магазины. Томатная паста, масла, крупы и тысячи других товаров с доставкой на ваш склад.</p>
          <div className="home__hero-btns">
            <Link to="/catalog" className="btn-primary">Открыть каталог</Link>
            <Link to="/register" className="btn-secondary">Стать поставщиком</Link>
          </div>
        </Container>
      </div>

      {/* Categories */}
      <Container>
        <div style={{ padding: '48px 0 0' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {categories.map((c, i) => (
              <Link to="/catalog" key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'white', border: '1px solid #e2e8f0',
                borderRadius: '100px', padding: '10px 20px',
                textDecoration: 'none', color: '#1a1a2e',
                fontSize: '14px', fontWeight: '500',
                transition: 'all 0.2s'
              }}>
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Features */}
      <div className="home__features">
        <Container>
          <h2>Почему выбирают нас</h2>
          <div className="home__features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Home