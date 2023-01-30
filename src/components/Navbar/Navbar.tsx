import styles from "./Navbar.module.css";
import imgIcon from "../../assets/img/icon.png";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <img width="30px" src={imgIcon} alt="" />
      </div>
      <div className={styles.url}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-todos"
              className={({ isActive }) =>
                isActive ? styles.activeClassName : undefined
              }
            >
              My todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-todo"
              className={({ isActive }) =>
                isActive ? styles.activeClassName : undefined
              }
            >
              Create todo
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
