import React from 'react'; 
import Apiresponse from './AxiosDevelopment/statboticsaxios' 
import Tbaresponse from './TBAeventfunction/tbaevent';
import Frcevents from "./FRCEVENTSAPI/frcevents";
import './AxiosDevelopment/statboticsaxios.css'
function App() {
  return (
    <div>
      <Apiresponse/> 
      <div className='response'>
       <Tbaresponse/>
      </div>
      <div className= 'response' >
          <Frcevents/>
      </div>
    </div>
  );
}

export default App;
