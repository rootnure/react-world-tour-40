import './Country.css';
const Country = ({country}) => {
    const {name, flags} = country;
    console.log(country);
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img className='max-h-32' src={flags.png} alt={`${name.common} National Flag`} />
        </div>
    );
};

export default Country;