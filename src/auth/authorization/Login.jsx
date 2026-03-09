import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Auth.css'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Ошибка входа')
      localStorage.setItem('token', data.access_token)
      window.location.href = '/'
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
          <p>Войдите в свой аккаунт</p>
        </div>
        <div className="auth__form">
          {error && (
            <div style={{ background: '#fef2f2', color: '#ef4444', padding: '12px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {error}
            </div>
          )}
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
          <button className="auth__btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Входим...' : 'Войти'}
          </button>
          <div className="auth__footer">
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login