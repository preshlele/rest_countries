import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Countries from './Countries'

import '../country.css';

const Country = () => {
    const [ country, setCountry] = useState([])
    const { name, border} = useParams()
    console.log(`this is the border` + border, name);
    useEffect(()=>{
        const fetchCountryData = async () =>{
            
            const response = await fetch(
                // 'https://restcountries.com/v2/name/argentina'
                `https://restcountries.com/v2/name/${name}`
            )
            const country = await response.json()
            setCountry(country) 

        }

        const fetchBorderData = async () =>{
            const response = await fetch(
               // 'https://restcountries.com/v2/name/argentina'
               `https://restcountries.com/v2/alpha/${name}`
           )
           const country = await response.json()
           setCountry([country]) 

       }

       if(name !== undefined && name.length > 3){
        fetchCountryData();
    }else{
        fetchBorderData();
    }
    }, [name])
    return (
        <>
              <section className="country">
                  
              </section>
        </>
  )

}