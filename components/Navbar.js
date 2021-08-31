import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const Navbar = () => {
    return (
        <header className={styles.heading}>
            <div className={styles.branding}>
                <Link href="/">
                    Dzhangir Bayandarov
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className={styles.links}>
                <ul className={styles.linkMenu}>
                    <li className={styles.icon}>
                        <a href="https://github.com/Dzhango">
                            <FontAwesomeIcon icon={faGithub} size="lg"/>
                        </a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://www.linkedin.com/in/dbayanda/">
                            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                        </a>
                    </li>
                    <li className={styles.icon}>
                        <a href="https://www.facebook.com/dzhangir.bayandarov/">
                            <FontAwesomeIcon icon={faFacebook} size="lg"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
