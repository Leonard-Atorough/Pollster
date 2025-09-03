import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export function Header() {
  return (
    <header role="banner" className={styles.header}>
      <h1>Pollster</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Poll</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
