import React from 'react'; 
import Apiresponse from './StatboticsApi/statboticsaxios'
import Tbaresponse from './TBAeventfunction/tbaevent';
import './StatboticsApi/statboticsaxios.css'
function App() {
  return (
    <div>
      <Apiresponse/> 
      <div className='response'>
       <Tbaresponse/>
      </div>

    </div>
  );
}

export default App;
