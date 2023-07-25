import React from 'react';
import { useState } from 'react';
import Tags from 'components/Tags';
import Cards from './Cards/index';
import styles from './Gallery.module.scss';
import images from './images.json';

export default function Gallery() {
  const [items, setItems] = useState(images);
  const tags = [...new Set(images.map((image) => image.tag))]

  const filtraFotos = (tag) => {
    const newImages = images.filter((image) => {
      return image.tag === tag;
    })

    setItems(newImages)
  }
  return (
    <section className={ styles.galeria }>
      <h2>Navegue pela galeria</h2>
      <Tags 
        tags={ tags } 
        filtraFotos={ filtraFotos }
        setItems = {setItems}
      />
      <Cards 
        items={ items } 
        styles={ styles }
      />
    </section>
  )
}
