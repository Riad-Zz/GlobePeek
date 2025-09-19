import React from 'react';

const LanguageButton = ({code}) => {
    return (
        <div>

            <button className="btn  bg-grey  my-2 rounded-2xl mr-1">{code}</button>
        </div>
    );
};

export default LanguageButton;