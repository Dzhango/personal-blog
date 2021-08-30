import styles from '../styles/Background.module.css';

const BackgroundVideo = () => {
    return (
        <div>
            <video autoPlay muted loop className={styles.video}>
                <source src="/background.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default BackgroundVideo
