import React from 'react';
import styles from './Tags.module.scss';
import images from '../Gallery/images.json';

export default function Tags( {tags, filtraFotos, setItems} ) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return(
            <li key={tag} onClick={ () => filtraFotos(tag) }>{tag}</li>
          )
        })}
        <li onClick={() =>setItems( images )}>Todas</li>
      </ul>
    </div>
  )
}
