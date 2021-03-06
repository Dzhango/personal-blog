import Head from 'next/head';
import styles from '../styles/Resume.module.css';

const resume = () => {
    return (
        <>
            <Head>
                <title>Dzhangir Bayandarov</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/leopard.ico" />
            </Head>
            <div className={styles.container}>
                <h3> Download it here: <a href="https://drive.google.com/file/d/1IC4fipZq1_wiglAtZhbMS834UapdMfdU/view?usp=sharing">Resume</a> </h3>
                <p>I am currently seeking software engineering internships for Summer 2022. I am willing to relocate anywhere in the US.</p>
            </div> 
        </>
    )
}

export default resume
