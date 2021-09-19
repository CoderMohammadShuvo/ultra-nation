import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, flag} = props.country;
    const addHandleCountry = props.addHandleCountry;
    return (
        
        <div>
            <div class="country">
                <h3>{name}</h3>
                <h5>Population:{population}</h5>
                <img id="flag" src={flag} alt="" />
                <br />
                <button onClick={()=>addHandleCountry(props.country)}>Add Country</button>
            </div>
            
        </div>
        
    );
};

export default Country;