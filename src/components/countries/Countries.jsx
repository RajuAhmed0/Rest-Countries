import React, { useEffect, useState } from 'react';
import "./Countries.css";
import Country from '../country/Country';
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [countryName, setCountryName] = useState([])
    const [addImg, setAddImg] = useState([])
    console.log(addImg);
    

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])




    return (
        <div>
            <div style={{ marginBottom: '15px' }}>
                {
                    countryName.map(CountryN => <span style={{ marginRight: '15px', fontSize: '25px', fontWeight: '600' }}>{CountryN},</span>)
                }
            </div>
            <div>
                {
                    addImg.map(flag => <img style={{marginRight: "10px", height:"70px", width:'80px'}} src={flag}/>)
                }
            </div>
        

            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        setAddImg={setAddImg}
                        addImg={addImg}

                        setCountryName={setCountryName}
                        countryName={countryName}
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;