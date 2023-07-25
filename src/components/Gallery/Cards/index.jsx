import React from 'react'
import Card from './Card/index';


export default function Cards({items, styles}) {
  return (
    <ul className={styles.galeria__cards}>
      {items.map((image) => {
        return (
          <Card image={image} styles={styles}/>
        )
      })}
    </ul>
  );
}
