import { useState } from 'react';

import './App.css';
import TripList from './Components/TripList';

function App() {
  const [showTrips,setShowTrips]=useState(true)
  return (
    <div className="App">
      <button onClick={()=>setShowTrips(false)}>Hide Trips</button>
       {showTrips && <TripList/>}
    </div>
  );
}

export default App;
