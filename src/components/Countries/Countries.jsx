

import { use, useState } from 'react';
import Country from '../Country/Country';
import VisitedCoutry from '../VisitedCountry/VisitedCoutry';


const Countries = ({ fetchPromise, search }) => {
    //----------Promise fetch----------------
    const wholePromise = use(fetchPromise);
    const allCountries = wholePromise.countries;

    //-------------Visited Country track and show State----------------
    const [vistedCountry, setVisitedCountry] = useState([]);


    const handleVisitedCountry = (country) => {
        // console.log(country) ;
        const newAdded = [...vistedCountry, country];
        setVisitedCountry(newAdded);
    }


    return (
        <>
            <p className='text-center text-xl mb-4'>Total Country Visited : {vistedCountry.length}</p>


            {/*--------------Button per Visited Country on UI------------------*/}
            <div className=' border-1  rounded-xl flex flex-wrap gap-2 justify-center my-5 py-3'>
                {
                    vistedCountry.map(country => <VisitedCoutry key={country.cca3.cca3} country={country}></VisitedCoutry>)
                }
            </div>

            {/*----------- All Country Info Container---------------*/}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    //----Implemented all Card and Live Search Feature-----
                    allCountries.filter(country =>
                        country.name.common.toLowerCase().includes(search.toLowerCase()))
                        .map(country => <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                }

            </div>
        </>

    );
};

export default Countries;