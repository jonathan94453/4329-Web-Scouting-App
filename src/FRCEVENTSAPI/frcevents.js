import React, {useState, useEffect} from "react";
import axios from "axios";
const FrcEvents= () => {

    const frcapiurl = "https://frc-api.firstinspires.org/v3.0/2024"
    const frcapiusername = 'jonathancino'
    const frcapipassword = 'f1d91cba-8f45-429f-bde5-03878c819edb'
    const [frcresponse, setfrcresponse] = useState(null)
    const [frcerror, setfrcerror] = useState(null)

    useEffect(() => {
        axios.get(frcapiurl, {
            auth: {
                username: frcapiusername,
                password: frcapipassword
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

if(frcresponse) {
    return (<div>{JSON.stringify(frcresponse)}</div>)

}




}

export default FrcEvents