import React, {useState, useEffect} from "react";
import axios from "axios";
const FrcEvents= () => {

    const [frcresponse, setfrcresponse] = useState(null)
    const [frcerror, setfrcerror] = useState(null)
    const server_frcapi_url = 'http://localhost:5000/frceventsapi'
    useEffect(() => {
        axios.get(server_frcapi_url)
            .then(response => {
                setfrcresponse(response.data)
                console.log("data is colleceted from frc events api")
            })
            .catch(err => {
                setfrcerror(err)
                console.log("events api error")
            })
    }, []);


if(frcerror) {
    return(<div>error {frcerror.message}</div>)
}

if(frcresponse) {
    return (<div>{JSON.stringify(frcresponse)}</div>)

}




}

export default FrcEvents