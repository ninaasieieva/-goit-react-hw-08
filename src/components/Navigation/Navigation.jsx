import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/"
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
