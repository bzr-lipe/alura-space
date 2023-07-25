import React from 'react';
import styles from './Footer.module.scss';
import github from 'assets/icons/github.svg';
import instagram from 'assets/icons/instagram.svg';
import linkedin from 'assets/icons/linkedin.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__lista}>
        <li>
          <a href="https://github.com/bzr-lipe" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bzr-lipe/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bzr.lipe/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
      <p className={styles.footer__text}>
        Desenvolvido por Felipe.
      </p>
    </footer>
  )
}
