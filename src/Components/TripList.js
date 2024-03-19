import { useState } from "react"
import {useFetch} from '../hooks/useFetch'
import './TripList.css'



 export default function TripList() {   
    const [url,setUrl]=useState('http://localhost:3000/trips')
    const {data:trips,isPending,error} =useFetch(url, {type:'GET'}) 
   
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending &&  <div>Loading trips...</div> }
      {error && <div>{error}</div>}
      <ul>
        {trips && trips.map(trip=>(
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