import { useEffect, useState } from "react";
import './Countries.css';
import Country from "../Country/Country";

const Countries = () => {
    
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, []);
    return (
        <>
            <h3>Countries: {countries.length}</h3>
            <h3>Visited: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map((visited, idx) => <li key={idx}>{visited.name.common}</li>)
                }
            </ul>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            country={country}
                            visitedCountries={visitedCountries}
                            setVisitedCountries={setVisitedCountries}
                        ></Country>
                    )
                }
            </div>
        </>
    );
};

export default Countries;