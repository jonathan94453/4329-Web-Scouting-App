import React from 'react'; 
import Apiresponse from './StatboticsApi/statboticsaxios.js'
import Tbaresponse from './TBAeventfunction/tbaevent.js';
import FrcEvents from "./FRCEVENTSAPI/frcevents.js";
import Teaminput from "./inputtest/testinput.js"
import './StatboticsApi/statboticsaxios.css'
function App() {
  return (
    <div className='response'>
        <Apiresponse/>
      <div>
       <Tbaresponse/>
      </div>
        <div>
            <FrcEvents/>
        </div>
        <div>
            <Teaminput/>
        </div>
    </div>
  );
}

export default App;
