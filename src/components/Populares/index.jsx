import React from 'react';
import styles from './Populares.module.scss';
import fotosPopulares from './fotos-populares.json';

export default function Populares() {
  return (
    <aside className={ styles.populares }>
      <h2>Populares</h2>
      <ul className={ styles.populares__imagens }>
        {fotosPopulares.map((image) => {
          return (
            <li key={ image.id }>
              <img src={ image.path } alt={ image.alt } />
            </li>
          )
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}
