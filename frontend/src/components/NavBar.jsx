import { NavLink, Link } from 'react-router-dom';

export default function NavBar({ user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">BMI2</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
                aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <NavLink to="/home" end className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/events" end className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Events</NavLink>
                </li>
            </ul>


            <ul className="navbar-nav ms-auto">
                {!user ? (
                <li className="nav-item">
                    <NavLink to="/login" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Login</NavLink>
                </li>
                ) : (
                <>
                    <li className="nav-item">
                    <span className="navbar-text me-2">Hi, {user.name ?? "User"}</span>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Logout</button>
                    </li>
                </>
                )}
            </ul>
        </div>
      </div>
    </nav>
  );
}
