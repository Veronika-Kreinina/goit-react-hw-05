import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.header}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.header}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
