import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {
    
    const [resident, setResindent] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResindent(res.data))
    },[url])

    //console.log(resident);

    return (
        <div className='residentInfo'>
            <div><img src={resident.image} alt="resident" /></div>
            <div>
                <h3> {resident.name} </h3>
                <p> {resident.status} - {resident.species} </p>
                <br />
                <div>
                    <small>origin:</small>
                    <p>{resident.origin?.name}</p>
                </div>
                <br />
                <div>
                    <small>episodes where appear:</small>
                    <p>{resident.episode?.length}</p>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;