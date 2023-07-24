import logo from './logo.png';
import search from './search.png';
import styles from './navBar.module.scss';

export default function NavBar () {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt='Logo Alura Space' />
      <div className={styles.cabecalho__container}>
        <input 
          className={styles.cabecalho__input}
          type='text'
          placeholder='O que você procura?'
        />
        <img src={search} alt='ícone de lupa' />
      </div>
    </header>
  )
}