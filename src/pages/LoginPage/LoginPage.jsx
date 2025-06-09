import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = async credentials => {
    try {
      await dispatch(login(credentials)).unwrap();
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };

  return (
    <div className={css.pageContainer}>
      <div className={css.formContainer}>
        <h1 className={css.pageTitle}>Login</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
