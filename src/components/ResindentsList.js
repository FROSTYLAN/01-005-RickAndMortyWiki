import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResindentsList = ({residents}) => {
    return (
        <div className='residentsList'>
        <div className='residentsTitle'><h2>Residents</h2></div>
        <div></div>
            {
                residents?.map(residents => (
                    <ResidentInfo url={residents} key={residents}/>
                ))
            }
        </div>
    );
};

export default ResindentsList;