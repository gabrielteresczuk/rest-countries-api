import React, { useEffect, useState } from 'react'
import Card from './Card';
import Filters from './Filters';
import Loader from './Loader';

function Inicio({dark}) {

    const [data, setData] = useState('');
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(datos => {
          setData(datos);
          setLoader(false);
        });
      }, []);

    const changeSearch = (event) =>{
      setSearch(event.target.value)
    }  

    const submitSearch = (event)=>{
      event.preventDefault();
      setLoader(true);

      if(search){
        fetch('https://restcountries.com/v3.1/name/'+search)
        .then(  response => {
          if(response.ok){
           return response.json();  
          }else{
            throw new Error("404");
          }
        })
        .then(datos => {
          setData(datos);
          setLoader(false);
        }).catch(()=>{
          setData('error');
          setLoader(false);
          }
        );

        }else{
          fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(datos => {
            setData(datos);
            setLoader(false);
          });
        }

    }

    const changeFilter = (event) =>{

      setFilter(event.target.value);

      setLoader(true);

      if(event.target.value !== 'all'){
        fetch('https://restcountries.com/v3.1/region/'+event.target.value)
        .then(response => response.json())
        .then(datos => {
          setData(datos);
          setLoader(false);
        });
      }else{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(datos => {
          setData(datos);
          setLoader(false);
        });
      }

    }



  return (
    <div>
          <Filters dark={dark} search={search} changeSearch={changeSearch} submitSearch={submitSearch} filter={filter} changeFilter={changeFilter}/>
            <div className={dark? 'App__grid--dark':'App__grid'}>
            {
                loader? <Loader/> : 
                data === 'error' ? 'No results for this search' :
                data.map(el => <Card key={el.name.common} data={el} />)
            }
            </div>
    </div>
  )
}

export default Inicio