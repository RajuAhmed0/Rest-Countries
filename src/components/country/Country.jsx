import React, { useState } from 'react';
import "./Country.css";

const Country = ({ country, setCountryName, countryName, setAddImg, addImg }) => {

    const { name, flags } = country

    const [visit, setVisit] = useState(false)
    const [add, setAdd] = useState(false)

    const [addFlags, setAddFlags] = useState(false)



    const addCountryBtn = () => {
        setCountryName([...countryName, name.common])
        setAdd(true)
    }
    const addImgBtn = () => {
        setAddImg([...addImg, flags.png]);
        setAddFlags(true); 
    };


    return (
        <div className='country-container'>
            <h2>Country Name: {name.common}</h2>
            <div className='img-container'>
                <img src={flags.png} alt={flags.alt} />
            </div>
            {!visit ?
                <button style={{ marginRight: "10px" }} onClick={() => setVisit(!visit)}>{visit ? 'Visited' : 'Visit'}</button> :
                <button disabled>Visited</button>
            }
            {!add ?
                <button onClick={() => addCountryBtn()}>Add Name</button> :
                <button disabled>Add Name</button>
            }
             {!addFlags ?
                <button onClick={() => addImgBtn()} style={{ marginLeft: '10px' }}>Add Flag</button> :
                <button disabled>Add Flag</button>
            }

        </div>
    );
};

export default Country;