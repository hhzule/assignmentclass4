import React, { useState }from 'react';
import './App.css';

import Linkcomponent from './Linkcomponent';
import Img from './reactboot.gif';
import On from './lighton.png';
import Off from './lightoff.png';





function App(props ) {
  const [lightState, setLightState] = useState(true);
  let [tempState, setTempState] = useState(35);


  return (
    <div className="App">
      <img src={Img} alt="logo"/><br />
      <img src= {lightState ? On : Off}  alt="pic" /><br></br>
     
  <button onClick={()=> setLightState(!lightState)}>Clich to turn the light <h1>{lightState ? "Off" : "On"}</h1> </button>
 
     <br></br>
     <hr />
  <h1>{tempState} C</h1>
  <button className="tempbtn" onClick={()=> setTempState(++tempState)}><h3>Clich to turn up the temperature </h3> </button>
  <button className="tempbtn" onClick={()=> setTempState(--tempState)}><h3>Clich to turn down the temperature </h3> </button>
     <br></br>
     <br></br>
     <br></br>
     <Linkcomponent />
    </div>
  );
}

export default App;
