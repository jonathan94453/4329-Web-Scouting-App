import React from 'react'; 
import Apiresponse from './StatboticsApi/statboticsaxios'
import Tbaresponse from './TBAeventfunction/tbaevent';
import FrcEvents from "./FRCEVENTSAPI/frcevents.js";
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
    </div>
  );
}

export default App;
