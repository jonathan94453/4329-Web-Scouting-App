import express from 'express'
import axios from "axios";
import 'dotenv/config'
const router = express.Router()



router.get('/:teamnumber', (req, res) => {


    axios.get('https://api.statbotics.io/v3/team/4329')
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send("error reached in accessing team statbotics apiinfo")
        })

});


export default router