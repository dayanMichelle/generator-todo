import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <img width="30px" src="/icon.png" alt="" />
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
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-todos"
              className={({ isActive }) =>
                isActive ? styles.activeClassName : undefined
              }
            >
              TODOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-todo"
              className={({ isActive }) =>
                isActive ? styles.activeClassName : undefined
              }
            >
              CREATE
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
