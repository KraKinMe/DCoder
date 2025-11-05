import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    // (Optional) Tell backend to clear session if you're using cookies
    // await axios.post(`${API_BASE}/api/auth/logout`, {}, { withCredentials: true });
    setUser(null);             // Clear user info in global state
    navigate('/login');        // Redirect to login page
    // If using localStorage for token: localStorage.removeItem("token");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">DCoder</div>
      <div>
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
        {user ? (
          <button onClick={handleLogout} className="navbar-link" style={{ background: "none", border: "none", cursor: "pointer" }}>Logout</button>
        ) : (
          <Link to="/login" className="navbar-link">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
