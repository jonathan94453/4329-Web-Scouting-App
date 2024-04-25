import React, {useState, useEffect} from "react";
import axios from "axios";

const FrcEvents= () => {
    const frcapiurl = " https://frc-api.firstinspires.org/v3.0/"
    const [frcresponse, setfrcresponse] = useState(null)
    const [frcerror, setfrcerror] = useState(null)

    useEffect(() => {
        axios.get(frcapiurl, {
            headers: {
                Authorization: 'am9uYXRoYW5jaW5vOmYxZDkxY2JhLThmNDUtNDI5Zi1iZGU1LTAzODc4YzgxOWVkYg=='
            }
        })
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

return (<div>{JSON.stringify(frcresponse)}</div>)






}

export default FrcEvents