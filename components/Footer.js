import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.footerText}>
          Made with <span>💙</span> by ©
          <a href="https://github.com/katherinebl" target="_blank">
            KatherineBL
          </a>
          2022
        </p>
      </div>
    </footer>
  )
}
