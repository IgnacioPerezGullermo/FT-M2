import React from 'react';
import styles from './card.module.css';

function Card(props) {
  // acá va tu código
  //console.log(props.name)
  // const cardStyle = {
  //   border: '1px solid black',
  //   width: '30%',
  //   gridTemplateAreas: `
  //                       'title'
  //                       'min max img'
  //   `
  // }
  
  return (
    <div className={styles.cityCard}>
      <div className={styles.cityName}>
      <h2>{props.name}</h2>
      <button className={styles.btn} onClick>X</button>
      </div>
      <div className={styles.min}>
        <span className={styles.min}>Minima</span> 
        <h4 className={styles.min}>{props.min} °C</h4>
      </div>
      <div className={styles.max}>
        <span className={styles.max}>Maxima</span>
        <h4 className={styles.max}>{props.max} °C</h4>
      </div>
      <div className={styles.img}>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
    </div>
  ) 
};
export default Card