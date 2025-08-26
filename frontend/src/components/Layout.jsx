import NavBar from './NavBar';

export default function Layout({ children, user, onLogout }) {
  return (
    <div className="container-fluid px-0 bg-dark min-vh-100">
      <NavBar user={user} onLogout={onLogout} />
      <div>
        {children}
      </div>
    </div>
  );
}
