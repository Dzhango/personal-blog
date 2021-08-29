import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href="/">
                Dzhangir Bayandarov
            </Link>
            <FontAwesomeIcon icon={faCopyright} size="sm" />
        </div>
    )
}

export default Footer
