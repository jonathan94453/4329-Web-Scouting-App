    import React, {useState, useEffect} from 'react'
    import axios from 'axios'

    const Tbaresponse= ()=> {
        const tbaurl = 'https://www.thebluealliance.com/api/v3/status'
        const tbakey = 'FhMESG23EnDrPxCLmYWsKYHTDLVFnVQhlXjx5ccWjBBXV6LMvwbqcsQSlvph6iXi'
        const [responsed, setresponsed] = useState(null) 
        const [error, seterror] = useState(null) 

        useEffect(() => {

                axios.get(tbaurl, {
                    headers: {
                        'X-TBA-Auth-Key': tbakey
                    }
                })
                    .then(response => {
                        setresponsed(response.data)
                        console.log("response")
                    })
                    .catch(err => {
                        seterror(err)
                        console.log("errorcaught")
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