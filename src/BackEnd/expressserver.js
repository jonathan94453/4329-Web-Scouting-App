//Dependencies from Node
import express from 'express';
import axios from 'axios'
import cors from 'cors'
import 'dotenv/config'

//Router imports

import TeamEpaRouter from './Statbotics-RESTAPI Calls/Statbotics-Epa/EPA.js'
import TeamRouter from './FRC Events API Calls/FRC-Team-Calls/TeamName.js'

//Variables
const app = express()
const port = 4000
const statboticsurl = "https://api.statbotics.io/v3/"
const TBAurl = "https://www.thebluealliance.com/api/v3/status"
const TBAapikey = process.env.TBA_API_KEY
const frcapiurl = 'https://frc-api.firstinspires.org/v3.0/'
const frcapi_username = process.env.FRC_API_USERNAME
const frcapi_key = process.env.FRC_API_KEY


const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/EPA', TeamEpaRouter)
app.use('/Team', TeamRouter)

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




