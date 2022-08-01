import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import Loader from './Loader';
import './Pais.css'

function Pais({dark}) {

    const {paisId} = useParams();

    const [data, setData] = useState('');
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/alpha/'+paisId)
        .then(response => response.json())
        .then(datos => {
          setData(datos['0']);
          setLoader(false);
          //console.log(datos['0'].borders);


        });
      }, [paisId]);
    
      

  return (
    <div className={dark ? 'Pais--dark' : 'Pais' }>
        <div>
        <Link to={"/"}>
            <button><span className="material-symbols-outlined">west</span> Back</button>
        </Link>
        </div>
        {
            loader ? <Loader/> :
            <div className='Pais__detalle'>

                    <img src={data.flags.svg} alt="Girl in a jacket"></img>

                <div className='Pais__detalle__texto'>
                    <h1>{data.name.common}</h1>
                    <div className='Pais__detalle__texto__col'>
                        <ul>
                            <li><b>Native Name: </b>{Object.values (data.name.nativeName)[0].common}</li>
                            <li><b>Population: </b>{parseInt(data.population).toLocaleString()}</li>
                            <li><b>Region: </b>{data.region}</li>
                            <li><b>Sub Region: </b>{data.subregion}</li>
                            <li><b>Capital: </b>{data.capital}</li>
                        </ul>

                        <ul>
                            <li><b>Top Level Domain: </b>{data.tld}</li>
                            <li><b>Currencies: </b>{Object.values (data.currencies)[0].name}</li>
                            <li><b>Languajes: </b>{
                                Object.values(data.languages).map(val =>  val ).join(', ')
                            }</li>
                        </ul>
                    </div>
                    {data.borders &&
                    <div className='Pais__detalle__borders'>
                        <b>Border Countries: </b>
                        {data.borders.map(el => <span key={el}> {el} </span>)}
                    </div>
                    }

                </div>
            </div>
        }
        
    </div>
  )
}

export default Pais