import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours,setTours] = useState([]);
  const [isLoading,setIsLoading]= useState(true);
  const removeTour = (id)=>{
  const newTours = tours.filter((tour)=> tour.id!==id);
  setTours(newTours);
}
  const fetchTours = async()=> {
    setIsLoading(true);
    try{
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
    console.log(tours)
    }catch(error){
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchTours();
  },[]);
  if(isLoading){
    return (
      <main>
        <Loading/>
      </main>
    );
  }
  if(tours.length === 0){
    return (<main>
      <h2>no tours left</h2>
      <button className='btn' onClick={fetchTours}>Refrech</button>
    </main>);
  }
  return (<main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>);
}

export default App
