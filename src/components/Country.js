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
              <Link to="/"><button className='back'><ion-icon className="btn btn-light"
      name="arrow-back-outline"></ion-icon>  Back</button></Link>
                {
                    country.map((c) =>{
                        const { code, flag, name, nativeName, population, region,
                            subregion, capital, topLevelDomain, currencies
                            , languages, borders} = c
                        
                        let bord = [name];
                        if(borders !== undefined){
                            console.log('this is borers'+ borders)
          
                            bord = borders; 
                              
          
                          }
                          return(
                            <article key={code}>
        
                                {/* <div className="country-inner"> */}
                                    <div className="flag">
                                        <img src={flag} alt="name" />
                                    </div>
                                    <div className='detailAndBorder'>
                                        <div className="country-details">
                                            {/* <div className="country-details"> */}
                                            <div className="native">
                                                <h2>{name}</h2>   
        
                                                <h5>Native Name: <span>{nativeName}</span></h5>
                                                <h5>Population: <span>{population}</span></h5>
                                                <h5>Region: <span>{region}</span></h5>
                                                <h5>Sub region: <span>{subregion}</span></h5>
                                                <h5>Capital: <span>{capital}</span></h5>
                                            </div>
                                            
                                            <div className="top">
                                                <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                                                <h5>currencies: <span>{currencies[0].name}</span></h5>
                                                <h5>Languages: <span>{languages[0].name}</span></h5>
                                            </div>
                                            
                                            
        
                                            {/* </div> */}
                                        </div>
                                        <div className='borders'>
                                            <h3>border: </h3>
                                            {/* <div className="borders"> */}
                                             
                                                {bord.map((border)=> {
                                                    return(
                                                        <Link to={{pathname:`/${border}`, state: {border: border}}}>
                                                            <ul key={border}>
                                                                <li>{border}</li>
                                                                <Link to={`/${border}`}></Link>
                                                            </ul>
                                                        </Link>
                                                    )
                                                })}
                                        
                                                
                                            {/* </div> */}
                                        </div>
                                    </div>
                                {/* </div> */}
                            </article>
                        )
                    })
                }
              </section>
        </>
  )

}
export default Country