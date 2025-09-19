// import button from 'daisyui/components/button';
import React, { useState } from 'react';
import LanguageButton from './LanguageButton';

const Country = ({country,handleVisitedCountry}) => {
    //---------Currency Object------------------ 
    const currencyObject = country?.currencies?.currencies ;
    const currencyCode = Object.keys(currencyObject)[0] ;
    //------------Language Object------------------- 
    const languageObject = country.languages.languages ;
    const languageCode = Object.keys(languageObject) ;

    //------------Handle Visited button CLick State---------------------- 
    const [status,setStatus] = useState(false)
    const hadleVisitedButton = ()=> {
        setStatus(!status) ;
        // console.log(country) ;

        //-----Passing Value to Countries Component with clicked Country-------
        if(!status) handleVisitedCountry(country) ;
    }
   
    return (
        <div className=' border-1 px-2 py-2 rounded-xl'>
            <div className='flex justify-center '>
            <img  src={country.flags.flags.png} alt="" className='rounded-xl'/>
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
            <button onClick={hadleVisitedButton} className={`btn btn-wide ${status ? ` bg-green-500` : `bg-red-400`} my-2 rounded-2xl`}>{status ? "Visited" : "Not Visited"}</button>
            </div>
        </div>
    );
};

export default Country;