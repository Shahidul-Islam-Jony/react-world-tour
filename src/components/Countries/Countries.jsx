import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

// hi...
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        // console.log('add this to your visited country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleSetFlag = (flag) => {
        console.log('hi');
        const newFlags = [...flags, flag];
        setFlags(newFlags);
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove
    

    return (
        <>
            <h3>Countries: {countries.length}</h3>
            <div>
                {/* Visited countries */}
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                <h2>Flags: {flags.length}</h2>

                {
                    flags.map((flag, idx) => <img key={idx} src={flag.png} className="visitedFlags" alt="" />)
                }
            </div>
            {/* Display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleSetFlag={handleSetFlag}
                    >
                    </Country>)
                }
            </div>
        </>
    );
};

export default Countries;