import { useState,useEffect,useCallback } from "react"
import './TripList.css'
 export default function TripList() {  

    const [trips,setTrips]=useState([])
    const [url,setUrl]=useState('http://localhost:3000/trips')

    const fetchtrips= useCallback( async()=>{
      const response=await fetch(url)
      const json =  await response.json()
      setTrips(json)
    },[url])

    useEffect(()=>{
         fetchtrips()
    },[fetchtrips])

    // console.log(trips)
  
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip=>(
            <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
                {/* <p>{trip.loc}</p> */}
            </li>
        ))}
      </ul>

      <div className="filter">
        <button onClick={()=>setUrl('http://localhost:3000/trips?loc=Europe')}>
            European Trips
        </button >
        <button onClick={()=>setUrl('http://localhost:3000/trips')}>
            All the trips
        </button>

      </div>
    </div>
  )
}
