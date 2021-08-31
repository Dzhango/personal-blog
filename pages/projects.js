import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Image from 'next/image';
import homepage from '../public/projects/homepage.png';
import loginpage from '../public/projects/loginpage.png';
import stockTracker from '../public/projects/stockTracker.png';
import uptone from '../public/projects/UptonePage.png';
import tdee from '../public/projects/tdeeCalculator.png';
import huffman from '../public/projects/huffman.png';
import pokemon from '../public/projects/pokemon.png';

export default function Projects() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Dzhangir Bayandarov</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/leopard.ico" />
        </Head>

        <h2>Project Archives</h2>
      </div>
      <div className={styles.content}>
        <h2>Uptone</h2>
        <div className={styles.images}>
          <Image src={uptone} alt="uptone page" />
        </div>
        <p className={styles.desc}>Uptone is a consumer-media mobile startup being built for transforming monotonous content consumption into a fun and engaging experience.
        I have contributed to the implementation of the voice control part of the application. Utilizing AWS Transcribe API, I used the EXPO native voice recordings to control the
        application interface.

        </p>
        <h2>Smart Goal Collector</h2>
        <div className={styles.images}>
          <Image src={homepage} alt="home page" />
          <Image src={loginpage} alt="login page" />
        </div>
        <p className={styles.desc}>This is a goal-sharing platform, users can register and create/share their goals libararies. I have used the MERN stack, and implemented authentication with express and JWT. This was my first big CRUD project,
          was particularly inspiring for me.
        </p>
        <h2>Meme Stock Tracker</h2>
        <div className={styles.images}>
          <Image src={stockTracker} alt="stock tracker " />
        </div>
        <p className={styles.desc}> This is a Web Search App to look up data on any stock. The running line at the bottom, scrapes the WallStreetBets subreddit, and provides the number of mentions and top comments for the current stock.
        </p>
        <h2>Meme Stock Tracker</h2>
        <div className={styles.images}>
          <Image src={tdee} alt="tdee calculator" />
        </div>
        <p className={styles.desc}> This is a Web App, that calculates daily caloric intake based on physical measurements.
        I have built it when I was very new to react, so I have learned a lot of functional component structure, and state management. Plus,
        fitness was always a hobby of mine.
        </p>
        <h2>School Projects</h2>
        <div className={styles.images}>
          <Image src={huffman} alt="tdee calculator" styles={styles.img} />
          <Image src={pokemon} alt="tdee calculator" styles={styles.img} />
        </div>
        <div className={styles.text}>
          <ul>
            <li><span>Huffman Encoder</span> is a compression program that can take a large DNA sequence and securely compress it.</li>
            <li><span>Pokemon Battle Simulator</span>, gives you a set of pokemon to pick and to battle. You can go into wild mode, to capture other pokemons, which can be risky.
            It's a java based text game that emphasizes Java generics and some important JVL data structures. 
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
