import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    const {name, flags} = country;
    const [isVisited, setIsVisited] = useState(false);

    const handleVisited = () => {
        setIsVisited(!isVisited);
    }

    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img className='max-h-32' src={flags.png} alt={`${name.common} National Flag`} />
            <br />
            <button onClick={handleVisited}>Visited</button>
            <p>{ isVisited ? 'I have visited this country' : 'Want to visit' }</p>
        </div>
    );
};

export default Country;