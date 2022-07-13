import React from 'react';
import Card from './Card';
import styles from './card.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
   //console.log(ciudades.cities[0])
  return (
    <div className={styles.cardContainer}>
      {
        cities.map((ciudad) =>(
          <Card
          id={ciudad.id}
          max={ciudad.max}
          min={ciudad.min}
          name={ciudad.name}
          img={ciudad.img}
          onClose={() => alert(ciudad.name)}
        />
        ))}
    </div>
    
  );
}