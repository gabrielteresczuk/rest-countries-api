import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

function Card({data}) {

    //console.log(data);
    //console.log(data.region);

  return (

    
    <div className='Card_Cont'>
    <Link to={"/Pais/" + data.cca2}>
      <div className='Card'>
    
    
        <img src={data.flags.svg} alt="Girl in a jacket"></img>
        <div className='Card__desc'>
            <h3>{data.name.common}</h3>
            <ul>
                <li><b>Population:</b> {parseInt(data.population).toLocaleString()}</li>
                <li><b>Region:</b> {data.region}</li>
                <li><b>Capital:</b> {data.capital}</li>
            </ul>
        </div>
      </div>
      </Link>
    </div>

  )
}

export default Card