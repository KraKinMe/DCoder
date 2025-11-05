import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

function Register() {
  const navigate = useNavigate();

  // Handle successful registration
  const handleRegister = (user) => {
    // You can save user info, token, etc. in state/localStorage here if you want
    navigate('/dashboard'); // Redirect to dashboard (or login) after registration
  };

  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default Register;
