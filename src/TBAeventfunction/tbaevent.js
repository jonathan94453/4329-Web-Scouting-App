    import React, {useState, useEffect} from 'react'
    import axios from 'axios'
    const tbakey = 'FhMESG23EnDrPxCLmYWsKYHTDLVFnVQhlXjx5ccWjBBXV6LMvwbqcsQSlvph6iXi'

    const Tbaresponse= ()=> {
        const tbaurl = 'https://www.thebluealliance.com/api/v3/status'
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

const Tbateamresponse= () => {
    const [teamresponse, setteamresponse] = useState(null)
    const [teamerror, Setteamerror] = useState(null)
    const Teamname = "/frc4329"
    axios.get(tbaurl + Teamname, {
        headers: {
            'X-TBA-Auth-Key': tbakey
        }
    })
        .then(response => {
            setteamresponse(response.data)
            console.log("teaminforeciveved")
        })
        .catch(err => {
            Setteamerror(err)
            console.log("teamerror")
        })



if(teamerror) {
    return(<div>error...</div>)
}

if(teamresponse) {
    const parseddata = JSON.parse(teamresponse)
     const teamNickname = parseddata.nickname
    return(<div>{JSON.stringify(teamNickname)}</div>)
}

    };
export default function Tbateamresponse