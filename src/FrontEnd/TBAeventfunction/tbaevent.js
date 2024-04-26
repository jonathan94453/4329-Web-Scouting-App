    import React, {useState, useEffect} from 'react'
    import axios from 'axios'

    const Tbaresponse= ()=> {
        const tbaurl = 'http://localhost:5000/status/TBA'
        const [responsed, setresponsed] = useState(null) 
        const [error, seterror] = useState(null) 

        useEffect(() => {

                axios.get(tbaurl)
                    .then(response => {
                        setresponsed(response.data)
                        console.log("response from server tba react component")
                    })
                    .catch(err => {
                        seterror(err)
                        console.log("errorcaught tba react component")
                    })

        }, [tbaurl])


if(!responsed) {
    return <div>responseisnull</div>
} 

if(error) {
    return <div>Error.. {error.message}</div>
} 


return <div>{JSON.stringify(responsed)}</div>


}; 

export default Tbaresponse

