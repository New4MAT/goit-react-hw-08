import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link} end>
        <span className={css.icon}>🏠</span>
        <span className={css.text}>Home</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          <span className={css.icon}>📒</span>
          <span className={css.text}>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
}
