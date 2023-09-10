import { useEffect, useState } from "react";
import './Countries.css';
import Country from "../Country/Country";
import VisitedCountries from "../VisitedCountries/VisitedCountries";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const resultStyles = {
        backgroundColor: '#000000C9',
        padding: '5px 50px',
        margin: '0px -50px',
        borderRadius: '20px',
        marginBottom: '20px',
        top: '0px'
    };

    return (
        <div className=" relative">
            <div className="max-h-76 sticky" style={resultStyles}>
                <h3>Countries: {countries.length}</h3>
                <VisitedCountries
                    visitedCountries={visitedCountries}
                ></VisitedCountries>
                <div className="flags-container">
                    {
                        visitedCountries.length ? visitedCountries.map((visited, idx) => <img style={{ height: '32px' }} key={idx} src={visited.flags.png} />) : ""
                    }
                </div>
            </div>
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
        </div>
    );
};

export default Countries;