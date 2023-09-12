import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h3>Practice Projects</h3>
        <ul className={styles.navItem}>
            <Link to="/">Home</Link>
            <Link to="/task">Todo-App</Link>
        </ul>
    </div>
  )
}

export default Navbar