import axios from 'axios'; 
import React, { useState, useEffect } from 'react'; 
import './statboticsaxios.css'

const Apiresponse= ()=> { 

const [responseBody, setResponseBody] = useState(null) 
const [error, setError] = useState(null) 
     
const statbotics_url = 'https://api.statbotics.io/v3/'; 

useEffect (() => {
axios.get(statbotics_url)
    .then(response => {
        setResponseBody(response.data)
        console.log('datacollected')
    }) 
    .catch(err => {
        setError(err) 
        console.log("error detected", err) 
    }); 
}, []); 


if(!responseBody && !error) {
    return(<div className='response'>Loading....</div>) 
}

if(error) {
    return(<div className='response'>{error.message}</div>)
}




return (<div className='response'>{JSON.stringify(responseBody)}</div>)


};  

export default Apiresponse 