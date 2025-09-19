import React, { useState } from 'react';

const VisitedCoutry = ({ country }) => {
    // console.log(country) ;
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setIsOpen(true)} className='btn rounded-xl'>{country.name.common}</button>
            {
                isOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box">

                            <div className=' border-1 px-2 py-2 rounded-xl'>
                                <div className='flex justify-center '>
                                    <img src={country.flags.flags.png} alt="" className='rounded-xl' />
                                </div>
                                <div className='text-center py-2'>
                                    <p className='text-2xl font-bold '>{country.name.common}</p>
                                    <p className='pt-2'>Polulation : {country.population.population}</p>
                                    <p className='pt-2'>Region : {country.region.region}</p>
                                    {/* <button onClick={hadleVisitedButton} className={`btn btn-wide ${status ? ` bg-green-500` : `bg-red-400`} my-2 rounded-2xl`}>{status ? "Visited" : "Not Visited"}</button> */}
                                </div>
                            </div>

                            <div className="modal-action justify-start">
                                <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default VisitedCoutry;