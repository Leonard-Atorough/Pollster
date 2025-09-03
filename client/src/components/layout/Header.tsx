import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export function Header() {
  return (
    <header role="banner" className={styles.header}>
      <h1>
        <Link to="/">Pollster</Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/create">Create Poll</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
