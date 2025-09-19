

import { use } from 'react';
import Country from '../Country/Country';

const Countries = ({fetchPromise}) => {
    const wholePromise = use(fetchPromise) ;
    const allCountries = wholePromise.countries ;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {/* <Country></Country>
            <Country></Country>
            <Country></Country> */}
            {
                allCountries.map(country => <Country key={country.ccn3.ccn3} country = {country}></Country>)
            }
            
        </div>
    );
};

export default Countries;