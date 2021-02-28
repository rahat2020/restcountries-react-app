import React from 'react';

const Country = (props) => {
const {name, population, region, flag}= props.country;
const handleAddCountry = props.handleAddCountry;

return (
        <div>
            <h4>country name:- {name}</h4>
            <img style={{height:'50px'}}src={flag} alt=""/>
            <h5>population: {population}</h5>
            <p>region: {region}</p>
            <button onClick={ ()=> handleAddCountry (props.country)}>add country</button>
           
            {/* <p>flag: {flag}</p> */}
            {/* <h4>country name:- {props.country.name}</h4>
            <h5>population: {props.country.population}</h5>
            <p>region: {props.country.region}</p>
            <p>flag: {props.country.flag}</p> */}
        </div>
    );
};

export default Country;