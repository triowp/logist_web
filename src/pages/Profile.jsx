import Container from '../components/Container'
import '../styles/Profile.css'

function Profile() {
  const menuItems = [
    { icon: '📦', label: 'Мои заказы', active: true },
    { icon: '❤️', label: 'Избранное' },
    { icon: '🏢', label: 'Данные компании' },
    { icon: '📍', label: 'Адреса доставки' },
    { icon: '⚙️', label: 'Настройки' },
  ]

  return (
    <div className="profile">
      <Container>
        <div className="profile__header">
          <div className="profile__avatar">М</div>
          <div className="profile__info">
            <h2>Мой магазин</h2>
            <p>magazine@email.com · Покупатель</p>
          </div>
        </div>

        <div className="profile__grid">
          <div className="profile__menu">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className={`profile__menu-item ${item.active ? 'profile__menu-item--active' : ''}`}
              >
                {item.icon} {item.label}
              </div>
            ))}
            <div className="profile__menu-item profile__menu-item--danger" style={{ marginTop: '12px' }}>
              🚪 Выйти
            </div>
          </div>

          <div className="profile__content">
            <h3>Статистика</h3>
            <div className="profile__stats">
              <div className="stat-card">
                <div className="stat-card__value">0</div>
                <div className="stat-card__label">Заказов</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__value">0 тг</div>
                <div className="stat-card__label">Потрачено</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__value">0</div>
                <div className="stat-card__label">Поставщиков</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile