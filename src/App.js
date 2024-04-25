import React from 'react'; 
import Apiresponse from './AxiosDevelopment/statboticsaxios' 
import Tbaresponse from './TBAeventfunction/tbaevent';
function App() {
  return (
    <div>
      <Apiresponse/> 
      <p>
        {Tbaresponse} 
      </p>
    </div>
  );
}

export default App;
