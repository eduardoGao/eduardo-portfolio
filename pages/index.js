import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Proyects from '../components/proyects'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.nameContainer}>
            <div className={styles.image}>
              <img src='/me.png' width={100} height={100} layout='fixed' />
            </div>
            <div>
              <h1 className={styles.name}>Eduardo Díaz</h1>
              <h2 className={styles.job}>Frontend Developer & UI Designer</h2>
            </div>
            <div className={styles.social}>
              <a href="https://linkedin.com/in/eduardo-esaú-díaz-31757912a" target="_blank" rel="noopener noreferrer"><img src="/linkedinW.svg" alt=""/></a>
              <a href="https://github.com/eduardoGao" target="_blank" rel="noopener noreferrer"><img src="/githubW.svg" alt=""/></a>
            </div>
          </div>
        </section>
        <div className={styles.description}>
          <p>¡Hola! Soy desarrollador web. Me especializo en <span className={styles.emphasis}>React.js y en UI design.</span> Me gusta mantenerme en constante aprendizaje y mejorar cada día.
              <br /><br /> Quiero unirme al equipo que está transformando el mundo con tecnología.</p>
        </div>
        <h3 className={styles.sectionTitle}>Experiencia</h3>
        <Proyects />
      </main>

      <footer className={styles.footer}>
        <a href="https://linkedin.com/in/eduardo-esaú-díaz-31757912a" target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" alt="" /></a>
        <a href="https://github.com/eduardoGao" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt=""/></a>
      </footer>
    </div>
  )
}
