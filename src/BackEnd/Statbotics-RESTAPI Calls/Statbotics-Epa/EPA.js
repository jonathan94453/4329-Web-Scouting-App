import express from 'express'
import axios from "axios";
import 'dotenv/config'
const router = express.Router()



router.get('/:teamnumber', (req, res) => {

    const teamnumber = req.params.teamnumber;
    console.log(teamnumber)
    axios.get('https://api.statbotics.io/v3/team/' + teamnumber)
        .then(response => {
            res.json({currentnorm_epa: response.data.norm_epa.current})
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send("error reached in accessing team statbotics apiinfo")
        })

});


export default router