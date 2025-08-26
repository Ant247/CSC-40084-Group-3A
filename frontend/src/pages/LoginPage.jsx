export default function LoginPage() {
  return (
    <main className="d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: '24rem' }}>
        <div className="card-body">
          <h2 className="h3 text-center mb-4">Login</h2>

          <form className="d-grid gap-3">
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" type="email" className="form-control" placeholder="Email" required />
            </div>

            <div>
              <label htmlFor="password" className="form-label">Password</label>
              <input id="password" type="password" className="form-control" placeholder="••••••••" required />
            </div>

            <div>
              Reset password <a href="">here</a>
            </div>

            <button type="submit" className="btn btn-dark w-100">Sign in</button>
          </form>
        </div>
      </div>
    </main>
  );
}

