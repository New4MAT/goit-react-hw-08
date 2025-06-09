import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link} end>
        <span className={css.icon}>🏠</span>
        <span className={css.text}>Home</span>
      </NavLink>

      <NavLink to="/contacts" className={css.link}>
        <span className={css.icon}>📒</span>
        <span className={css.text}>Contacts</span>
      </NavLink>
    </nav>
  );
}
