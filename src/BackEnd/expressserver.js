import express from 'express';
import axios from 'axios'
import cors from 'cors'
const app = express()
const port = 5000
const statboticsurl = "https://api.statbotics.io/v3/"
const TBAurl = "https://www.thebluealliance.com/api/v3/status"
const TBAapikey = "WK3zLigLRXwRCK7ppcpOROcjZskGKoEGEVQwGZGvTGDGKtYBtyL5wlg586Tf200h"
const frcapiurl = "https://frc-api.firstinspires.org/v3.0/"
const frcapi_username = "jonathancino"
const frcapi_key = "f1d91cba-8f45-429f-bde5-03878c819edb"


const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


//Base key
app.get('/', (req, res) => {
    res.send('express server reached')
});

//Statbotics Api test
app.get('/status/statbotics', (req, res) => {
    axios.get(statboticsurl)
        .then(response => {
            res.send(response.data)
            console.log("datarecieved")
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send("error reached")
        })
});

//Frc events test

app.get('/status/FRC', (req, res) => [
    axios.get(frcapiurl, {
        auth: {
            username: frcapi_username,
            password: frcapi_key
        }
    })
        .then(response => {
            res.send(response.data)
            console.log("frceventsapi datareciveved")
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send("error frc reached")

        })
])

app.get('/status/TBA', (req, res) => {
    axios.get(TBAurl, {
        headers: {
            'X-TBA-Auth-Key': TBAapikey
        }
    })
        .then(response => {
            res.send(response.data)
            console.log("tba responsed")
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send("TBA response error")
        })
})




//Error endpoint
app.get('/error', (req, res, next) => {
    const err = new Error('example error')
    next(err)
});


//err stack stracing
app.use((err , req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is wrong weeping rn')
});


//listen port set
app.listen(port, () => {
    console.log("express server listening on 5000")
});




