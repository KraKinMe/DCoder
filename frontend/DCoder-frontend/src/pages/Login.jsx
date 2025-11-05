import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  // Handle successful login
  const handleLogin = (user) => {
    // You can save user info, token, etc. in state/localStorage here if you want
    setUser(user);
    navigate('/dashboard'); // Redirect to dashboard (or profile) after login
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default Login;
