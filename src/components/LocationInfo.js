import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <div className='locationInfo'>
            <h2> { location.name } </h2>
            <div>
                <p><b>type: </b> {location.type}</p>
                <p><b>dimension: </b> {location.dimension}</p>
                <p><b>population: </b> {location.residents?.length}</p> 
            </div>
        </div>
    );
};

export default LocationInfo;