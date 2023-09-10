import { useState } from 'react';
import './Country.css';
const Country = ({ country, visitedCountries, setVisitedCountries }) => {
    const { name, flags } = country;
    const [isVisited, setIsVisited] = useState(false);

    const handleVisited = () => {
        setIsVisited(!isVisited);
    }

    const addNewVisited = country => {
        const newVisited = visitedCountries.map(visited => visited?.name?.common).includes(country?.name?.common) ? [...visitedCountries] : [...visitedCountries, country];
        setVisitedCountries(newVisited);
    }

    return (
        <div className={`country ${isVisited ? 'visited' : 'not-visited'}`}>
            <h3 style={{color: isVisited ? 'blue' : 'white'}}>{name.common}</h3>
            <img className='max-h-32' src={flags.png} alt={`${name.common} National Flag`} />
            <br />
            <button onClick={handleVisited}>Visited</button>
            {isVisited ? 'I have visited this country' : 'Want to visit'}
            <br />
            <button onClick={() => addNewVisited(country)}>Add Visited</button>
        </div>
    );
};

export default Country;