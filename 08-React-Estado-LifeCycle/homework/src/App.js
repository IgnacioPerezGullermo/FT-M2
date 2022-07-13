import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import styles from './components/card.module.css'



export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "4aa3d6167c4c722209f623c602bbdff7";
  function onSearch(ciudad){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
      .then((r)=> r.json())
      .then((recurso)=>{
        if(recurso.main !== undefined){
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id:recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,  
          };
          setCities(oldCities => [...oldCities, ciudad]);
        }else{
          alert("Ciudad no encontrada")
        }
      })
  }
  return (
    <div className="App">
      { /* Tu código acá: */ }
      <div className={styles.appWrapper}>
      <Nav onSearch={onSearch}/>

      <div>
        <Cards
          cities={cities}
        />
      </div>

      </div>
    </div>
  );
}
