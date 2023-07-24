import NavBar from '../../components/Navbar';
import Menu from '../../components/Menu';
import banner from './banner.png';
import styles from './HomePage.module.scss';

export default function HomePage () {
  return (
    <>
    <NavBar />
    <main>
      <section className={styles.principal}>
        <Menu />
        <div className={styles.principal__imagem}>  
          <h1>A galeria mais completa do espaço</h1>
          <img src={banner} alt='A imagem da terra vista do espaço' />
        </div>
      </section>
    </main>
    </>
  )
}