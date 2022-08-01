import React from 'react'
import './Filters.css'

function Filters({dark,search, changeSearch,submitSearch,filter,changeFilter}) {
  return (
    <div className={dark? 'Filters--dark':'Filters'}>
        <form className='Filters__search' onSubmit={submitSearch}>
            <label htmlFor="cars"><span className="material-symbols-outlined" id="search">search</span></label>
            <input type='search' placeholder='Search for a country...' value={search} onChange={changeSearch} ></input>
        </form>

            <select name="filter" id="filter" form="filterform" className='Filters__filter' value={filter} onChange={changeFilter}>
                
                <option value='' hidden>Filter by Region</option>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
    </div>
  )
}

export default Filters