import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import Filter from './Filter'


// API CALL AND FETCHING

const url = 'https://restcountries.com/v2/all'
let countryName = ''

// Get All c=Countries


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [searchVariable, setSearchVariable] = useState('')

    
    useEffect (() => {
        const fetchCountries = async() => {
            const response = await fetch(url)
            const  countries = await response.json()
            setCountries(countries)
        }

        const searhCountry = async(searchParam) => {
            if(searchParam !== ""){
                const response = await fetch(`https://restcountries.com/v2/name/${searchParam}?fields=flags,name,population,region,capital`)
                const  countries = await response.json()
            setCountries(countries)
            } else {
                const response = await fetch(url)
                const  countries = await response.json()
                setCountries(countries)
            }
            
        }

        const regionFilter = async(region) => {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            const  countries = await response.json()
            setCountries(countries)
        }


    $(document).ready(function () {
        fetchCountries()
    })

    $("#search").blur(function () {
        let searchVal = $("#search").val();
        searhCountry(searchVal)
    });

    $("#select").change(function () {
        let region = $("#select").val();
        regionFilter(region);
    })

        // fetchCountries()
        
    }, [])

    const removeCountry = (code)=>{
        const newCountry = countries.filter(
        (country) => country.code !== code
    )
    setCountries(newCountry)

    }
    
  return (

      
<>  
<div className="countriespage">
<Filter searchVariable={searchVariable} setSearchVariable={setSearchVariable} /> 


<section id="default" className="grid">
{countries.filter(e => searchVariable ==='' || e.name.toLowerCase().includes(searchVariable.toLowerCase())).map((country)=>{
    const {code, name, population, region, capital, flags} = country
    if(name === "Germany" || name === "United States of America" || name === "Brazil" || name === "Iceland"){
        return <Link to={{pathname:`/${name}`, state: {name: name}}} target="_blank">
        <article className='article' key={name}>
        <div>
            <img src={flags.png} alt={name} />
            <div className="details" id="details">
                <h3>{name}</h3>
                <h4>Population: <span>{population}</span> </h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
            </div>
          
        </div>
      </article>
      </Link>
    }
})}
</section>

<section className="grid">
{countries.filter(e => searchVariable ==='' || e.name.toLowerCase().includes(searchVariable.toLowerCase())).map((country)=>{
  const {code, name, population, region, capital, flags} = country
    if(typeof name == "object"){
        countryName = name.common
    } else {
        countryName = name;
    }


  return <Link to={{pathname:`/${name}`, state: {name: name}}} target="_blank">
   <article key={name}>

    <div>
        <img src={flags.png} alt={name} />
        <div className="details" id="details">
            <h3>{countryName}</h3>
            <h4>Population: <span>{population}</span> </h4>
            <h4>Region: <span>{region}</span></h4>
            <h4>Capital: <span>{capital}</span></h4>
            <Link to={`/${name}`}></Link>
        </div>
      
    </div>
  </article>
  </Link>
})}
</section>
</div>
</>

  )
}






// $("#search").blur(function () {
//     let searchParam = $("#search").val();
//     console.log(searchParam);
//     $("#grid").html("");
    // $('#default').html("");

    // $.ajax({
    //     url: `https://restcountries.com/v2/name/${searchParam}?fields=flags,name,population,region,capital`,
    //     type: 'GET',
    //     success: function(countries) {
    //         console.log(countries);
            

    //         let grid = $('#grid');
    //         let gridContent = "";
    //         countries.forEach(country => {

    //             gridContent = `
    //             <div id="" class="countryDiv">
    //                 <img class="flag" src="${country.flags.png}"/>
    //                 <div class="info">
    //                     <div id="" class="name"><strong>${country.name}</strong></div>
    //                     <div id="" class="population"><b>Population </b> ${country.population}</div>
    //                     <div id="" class="region"><b>Region: </b> ${country.region}</div>
    //                     <div id="" class="capital"><b>Capital: </b> ${country.capital}</div>
    //                 </div>
    //             </div>
    //             `;
    //                 grid.append(gridContent);

    //         });

    //     },
    //     error: function (err) {
    //         console.log(err);
    //     }
    // })
// });

// const Search = () => {
//     const [countries, setCountries] = useState([])
//     let searchParam = document.getElementById('search').value;
    
//     useEffect (() => {
//         const fetchCountry = async() => {
//             const response = await fetch(`https://restcountries.com/v2/name/${searchParam}?fields=flags,name,population,region,capital`)
//             const  country = await response.json()
//             setCountries(country)
//         }
//         fetchCountry()
        
//     }, [])

//     const removeCountry = (code)=>{
//         const newCountry = countries.filter(
//         (country) => country.code !== code
//     )
//     setCountries(newCountry)

//     }
    
//   return (

      
// <>  

//         <section className="grid">
//         {countries.map((country)=>{
//             const {code, name, population, region, capital, flag} = country
//             if(name === "Germany" || name === "United States of America" || name === "Brazil" || name === "Iceland"){
//                 return <article key={code}>
//                 <div>
//                     <img src={flag} alt={name} />
//                     <div className="details">
//                         <h3>{name}</h3>
//                         <h4>Population: <span>{population}</span> </h4>
//                         <h4>Region: <span>{region}</span></h4>
//                         <h4>Capital: <span>{capital}</span></h4>
//                         <Link to={`/countries/${name}`}></Link>
//                     </div>
                  
//                 </div>
//               </article>
//             }
//         })}
//        </section>

//        <section className="grid">
//        {countries.map((country)=>{
//           const {code, name, population, region, capital, flag} = country

//           return <article key={code}>
//             <div>
//                 <img src={flag} alt={name} />
//                 <div className="details">
//                     <h3>{name}</h3>
//                     <h4>Population: <span>{population}</span> </h4>
//                     <h4>Region: <span>{region}</span></h4>
//                     <h4>Capital: <span>{capital}</span></h4>
//                     <Link to={`/countries/${name}`}></Link>
//                 </div>
              
//             </div>
//           </article>
          
//       })}
//        </section>
// </>

//   )
// }


export default Countries