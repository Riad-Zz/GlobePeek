import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/countries'
import Country from './components/Country/Country'
import Nav from './components/Navbar/nav'

const fetchCountries = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all') ;
  return res.json() ;
}

function App() {

  const fetchPromise = fetchCountries() ;
  return (
    <>
     <Nav></Nav> 
     <h2 className='my-9 text-center text-3xl'>All Countries </h2>
     <Suspense fallback ={<span className="loading loading-spinner text-info"></span>}>
        <Countries fetchPromise = {fetchPromise} ></Countries>
     </Suspense>
    </>
  )
}

export default App
