import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          B2B<span>Market</span>
        </Link>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">Главная</Link>
          <Link to="/catalog" className="navbar__link">Каталог</Link>
          <Link to="/cart" className="navbar__link">🛒 Корзина</Link>
          <Link to="/profile" className="navbar__link">Кабинет</Link>
          <Link to="/login" className="navbar__link navbar__link--btn">Войти</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar