import express from 'express'
import axios from "axios";
import 'dotenv/config'
const router = express.Router()



router.get('/:TeamNumber', (req, res) => {
    const TeamNumber = req.params.TeamNumber
    axios.get('https://www.thebluealliance.com/api/v3/team/frc' + TeamNumber, {
        headers: {
            'X-TBA-Auth-Key': process.env.TBA_API_KEY
        }
    })
        .then(response => {
            res.json( {Teamname: response.data.nickname})

})
        .catch(err => {
            console.log(err.message)
        })
});

export default router