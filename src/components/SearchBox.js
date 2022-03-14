import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocation}) => {
    
    const [typeId, setTipeId] = useState("")

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
            .then(res => setLocation(res.data))
    }

    return (
        <div>
            <input type="text" onChange={e => setTipeId(e.target.value)} value={typeId} placeholder="type a location id"/>
            <button onClick={searchType}>Search</button>
        </div>
    );
};

export default SearchBox;