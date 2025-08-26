import { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const user = await login(email.trim(), password);
      onLogin?.(user);      
      navigate('/');         
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: '24rem' }}>
        <div className="card-body">
          <h2 className="h3 text-center mb-4">Login</h2>

          <form onSubmit={handleSubmit} className="d-grid gap-3">
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} id="email" type="email" className="form-control" placeholder="Email" required />
            </div>

            <div>
              <label htmlFor="password" className="form-label">Password</label>
              <input value={password} onChange={e=>setPassword(e.target.value)} id="password" type="password" className="form-control" placeholder="••••••••" required />
            </div>

            <div>
              Reset password <a href="">here</a>
            </div>

            {err && <div className="alert alert-danger py-2">{err}</div>}

            <button type="submit" className="btn btn-dark w-100" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
          </form>
        </div>
      </div>
    </main>
  );
}

