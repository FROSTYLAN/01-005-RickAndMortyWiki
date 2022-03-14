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
            <h3> { resident.name } </h3>
            <img src={resident.image} alt="resident"/>
            <p> {resident.status} - {resident.species} </p>
            <br />
            <small>origin</small>
            <p>{resident.origin?.name}</p>
            <small>episodes where appear</small>
            <br/>
            <p>{resident.episode?.length}</p>
        </div>
    );
};

export default ResidentInfo;