import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={css.link}>
        <span className={css.icon}>📝</span>
        <span className={css.text}>Register</span>
      </NavLink>

      <NavLink to="/login" className={css.link}>
        <span className={css.icon}>🔑</span>
        <span className={css.text}>Login</span>
      </NavLink>
    </div>
  );
}
