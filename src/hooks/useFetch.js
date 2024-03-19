import { useState,useEffect,useRef } from "react"


export const useFetch =(url,_options)=>{
   const [data,setData]=useState(null)
   const [isPending,setIsPending]=useState(false)
   const [error,setError]=useState(null)
   
   //use useRef to wrap an object/array argument 
   //which is useEffect dependency
   const options=useRef(_options).current

   useEffect(()=>{
       console.log(options)
       const controller=new AbortController()
       const fetchData=async()=>{
        setIsPending(true)
          
          try{
            const res=await fetch(url,{signal:controller.signal})
            if(!res.ok){
               throw new Error(res.statusText)
            }
            console.log(res)    
            const json =await res.json()
          
            setIsPending(false)
            setData(json)
            setError(null)
          }catch(err){
            if(err==="AbortError"){
                console.log("Fetch is aborted ")
            }
            else {
                setIsPending(false)
                setError('could not fetch the data') 
            }  
          }
          
       }

       fetchData()

    return ()=>{
       controller.abort()
    }
   },[url])

   return {data,isPending,error}
}  
