import React from 'react'
import open from './open.png';
import favorito from './favorito.png';

export default function Card({ image, styles }) {
  return (
    <li key={image.id} className={styles.galeria__card}>
      <img 
        className={styles.galeria__imagem}
        src={image.imagem}
        alt={image.titulo}
      />
      <p className={styles.galeria__descricao}>{image.titulo}</p>
      <div>
        <p>{image.creditos}</p>
        <span>
          <img src={open} alt="ícone coração de curtir" />
          <img src={favorito} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  )
}
