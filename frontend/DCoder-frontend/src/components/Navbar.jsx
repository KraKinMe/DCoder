import { Link } from 'react-router-dom';
import '../index.css'; // Ensure your CSS imports

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">DCoder</div>
      <div>
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
        <Link to="/login" className="navbar-link">Logout</Link>
      </div>
    </nav>
  );
}
export default Navbar;
