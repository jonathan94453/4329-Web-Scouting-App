import React, {useState} from "react";
import axios from 'axios'

const Test_team_input= () => {
    const [senddata, setsenddata] = useState('')
    const [responsed, SetResponsed] = useState('')
    const [error, seterror] = useState('')

    const handledatachange= (e) => {
     const value = e.data.change
     setsenddata(value)

    }
//Is my git broken?
    const handlesubmit= (e) => {
        const value = e.target.value
        console.log(e.target.value)
        setsenddata(value)
        axios.get('https//localhost:4000/team/frc' + senddata)
            .then (response => {
                SetResponsed(response.data)
        })
            .catch (err => {
                seterror(err.message)
            })
    }
//
if(error) {
    console.log(error.message)
}
//
    return (
            <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>Teamname: {responsed}</label>
                    <input
                        type='text'
                        value={senddata}
                        onChange={handledatachange}
                        required
                        />
                </div>
                <button type='submit'>Send</button>
            </form>

            </div>

    );    //commmit
}
export default Test_team_input