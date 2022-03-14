import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <div className='locationInfo'>
            <h1> { location.name } </h1>
            <p><b>type: </b> {location.type}</p>
            <p><b>dimension: </b> {location.dimension}</p>
            <p><b>population: </b> {location.residents?.length}</p> 
        </div>
    );
};

export default LocationInfo;