import * as React from 'react';
import "./Country.css"
import { Link } from 'react-router-dom';

const Countrycard = ({person}) => {
  return (
    <div className='cardcontainer'>
        <div className='card'>
        <div className='imgcontainer'>
        <img src={person.flags.svg} alt={person.name} />
        </div>
        <Link to={`/${person.name}`} style={{textDecoration:"none"}}>
        <h3 >{person.name}</h3>
        <p><b>Population:</b> {person.population}</p>
        <p><b>Region:</b> {person.region}</p>
        <p><b>Capital:</b> {person.capital}</p>
        </Link>
        </div>
       
    </div>
  )
}

export default Countrycard