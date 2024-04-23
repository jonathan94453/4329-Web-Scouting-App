import axios from 'axios' 

const apiresponse()=> {

const statbotics_url = 'https://api.statbotics.io/v3/' 

var response = axios.get(``${statbotics_url}``) 
return <div>{response}</div> 
} 

export default apiresponse  