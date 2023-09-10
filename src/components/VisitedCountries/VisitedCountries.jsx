import './VisitedCountries.css';

const VisitedCountries = ({visitedCountries}) => {
    return (
        <div>
        <h3>Visited: {visitedCountries.length}</h3>
        <ol style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', rowGap: '15px'}}>
            {
                visitedCountries.map((visited, idx) => <li style={{display: 'flex', flexWrap: 'wrap'}} key={idx}><small>{idx + 1}. {visited?.name?.common}</small></li>)
            }
        </ol>
        </div>
    );
};

export default VisitedCountries;