import React, {useState, useEffect} from "react";
import axios from 'axios'

const Test_team_input= () => {
    const [senddata, setsenddata] = useState(null)
    const [responsed, SetResponsed] = useState(null)
    const [error, seterror] = useState(null)

    const handlesubmit= (e) => {
        e.preventDefault();
        const value = e.target.value
        setsenddata(value)
        console.log("default")
    }

    const handledatachange= (e) => {
        const value = e.target.value
        setsenddata(value)
        axios.get('https//localhost:4000/team/frc' + senddata)
            .then (response => {
                SetResponsed(response.data)
        })
            .catch (err => {
                seterror(err.message)
            })
    }



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

    );
}
export default Test_team_input