import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry,handleSetFlag}) => {
    // console.log(country);
    const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] =useState(false);

    const handleClicked =()=>{
        setVisited(!visited);
    }
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited?'purple':'white'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=>handleSetFlag(country.flags)}>Add Flag</button>
            <br />
            <button onClick={handleClicked}>{visited? 'Visited':'Going'}</button>
            {
                // visited && 'I have visited this country'
                visited ? 'I have visited this country' : 'I want to visit'
            }
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleSetFlag={handleSetFlag}>
            </CountryDetail>
        </div>
    );
};

// hi...

export default Country;