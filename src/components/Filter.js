import React from 'react'


const Filter = ({searchVariable, setSearchVariable}) => {
  return (
    <section className="filter">
        <form  className="form-control">
            <input type="search" name="search" id="search" value={searchVariable} onChange={(e)=>setSearchVariable(e.target.value)} placeholder="Search for a country" />
        </form>
        <div className="region-filter">
            <select name="select" id="select" className="select">
                <option value="" disabled selected hidden>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option> 
            </select>
        </div>
    </section>
  )
}

export default Filter