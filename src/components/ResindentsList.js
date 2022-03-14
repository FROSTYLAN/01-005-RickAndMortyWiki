import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResindentsList = ({residents}) => {
    return (
        <div>
            {
                residents?.map(residents => (
                    <ResidentInfo url={residents} key={residents}/>
                ))
            }
        </div>
    );
};

export default ResindentsList;