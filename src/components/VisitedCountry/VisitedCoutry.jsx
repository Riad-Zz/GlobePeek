import React from 'react';

const VisitedCoutry = ({country}) => {
    // console.log(country) ;
    return (
        <div>
            <button className='btn rounded-xl'>{country.name.common}</button>
        </div>
    );
};

export default VisitedCoutry;