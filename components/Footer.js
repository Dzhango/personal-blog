import Link from 'next/link';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href="/">
                    Dzhangir Bayandarov
            </Link>
        </div>
    )
}

export default Footer
