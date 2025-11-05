import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();

  // Handle successful login
  const handleLogin = (user) => {
    // You can save user info, token, etc. in state/localStorage here if you want
    navigate('/dashboard'); // Redirect to dashboard (or profile) after login
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default Login;
