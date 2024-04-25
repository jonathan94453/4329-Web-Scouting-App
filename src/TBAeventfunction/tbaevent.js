    import React, {useState, useEffect} from 'react' 
    import axios from 'axios' 

    const Tbaresponse= ({tbaurl})=> {
        const url = tbaurl 
        const [responsed, setresponsed] = useState(null) 
        const [error, seterror] = useState(null) 

        useEffect(() => {
            axios.get(tbaurl)
                .then(response => {
                    setresponsed(response.data)
                    console.log("response")
                })
                .catch(err => {
                    seterror(err)
                    console.log("errorcaught")
                })
        }) 

if(!responsed && !error) {
    return("Loading....")
} 

if(error) {
    return("Error: " + error.message) 
} 


return JSON.stringify(responsed) 


}; 

export default Tbaresponse 