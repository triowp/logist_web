import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Auth.css'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'buyer' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Ошибка регистрации')
      window.location.href = '/login'
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth">
      <div className="auth__card">
        <div className="auth__logo">
          <h2>B2B<span>Market</span></h2>
          <p>Создайте аккаунт для вашего бизнеса</p>
        </div>
        <div className="auth__form">
          {error && (
            <div style={{ background: '#fef2f2', color: '#ef4444', padding: '12px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {error}
            </div>
          )}
          <div className="auth__input-group">
            <label>Название компании</label>
            <input
              className="auth__input"
              type="text"
              placeholder="ООО Ваша компания"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="auth__input-group">
            <label>Email</label>
            <input
              className="auth__input"
              type="email"
              placeholder="company@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="auth__input-group">
            <label>Пароль</label>
            <input
              className="auth__input"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="auth__input-group">
            <label>Тип аккаунта</label>
            <select
              className="auth__input"
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
            >
              <option value="buyer">Покупатель (магазин)</option>
              <option value="supplier">Поставщик</option>
            </select>
          </div>
          <button className="auth__btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
          <div className="auth__footer">
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register