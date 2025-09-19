// import button from 'daisyui/components/button';
import React from 'react';
import LanguageButton from './languageButton';

const Country = ({country}) => {
    // Currency Object 
    const currencyObject = country?.currencies?.currencies ;
    const currencyCode = Object.keys(currencyObject)[0] ;
    //Language Object 
    const languageObject = country.languages.languages ;
    // console.log(languageObject) ;
    const languageCode = Object.keys(languageObject) ;
    // console.log(languageCode) ;
    return (
        <div className=' border-1 px-2 py-2 rounded-xl'>
            <div className='flex justify-center'>
            <img  alt="" className='rounded-xl'/>
            </div>
            <div className='text-center py-2'>
            <p className='text-2xl font-bold '>{country.name.common}</p>
            <p className='pt-2'>Polulation : {country.population.population}</p>
            <p>Currency : {currencyObject[currencyCode]?.name} ({currencyObject[currencyCode]?.symbol})</p>
            <p>Language :</p>
            <div className='flex flex-wrap justify-center gap-1'>
                {
                    languageCode.map(code => languageObject[code] ? <LanguageButton key={code} code ={languageObject[code]}></LanguageButton> : "No"
                    ) 
            }
            </div>
            
            
            
            <button className="btn btn-wide bg-red-300 my-2 rounded-2xl">Not Visited</button>
            </div>
        </div>
    );
};

export default Country;