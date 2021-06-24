import React, { useState, useEffect } from 'react';

import Style from './Style.module.css'

const url = 'https://course-api.com/react-tours-project';

const App = () => {

const [tours, setTours] = useState([]);


  const getTours = async () => {
    const response = await fetch(url)
    const tours = await response.json();
    setTours(tours)
  }

  useEffect( () => { 
    getTours();
  }, [])

  return(
    <React.Fragment>
      <h1>Tours of the World</h1>  

      <ul>
      {tours.map( (tour) => {

        const {id, name, image, info, price} = tour;
        console.log(tour)
        return(

        <li key={id}>
          <img src={image} alt= {name}/>
          <div>
            <h4>Journey: {name}</h4>
            <h3 className={Style['price']}>Price: {price}</h3>
            <h3>Info: {info}</h3>
          </div>
        </li>    
        ) 
      } )}      
      </ul>

    </React.Fragment>
  )
};

export default App;
