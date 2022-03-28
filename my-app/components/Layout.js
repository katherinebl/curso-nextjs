import Navbar from './navbar'
import Footer from './Footer'
import styles from '../styles/Home.module.css'

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}
