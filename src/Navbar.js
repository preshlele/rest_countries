import React from 'react'
import $ from 'jquery'


$(document).ready(function () {
    let modeContent = $('#mode').html();
    console.log(modeContent);
      
        
  
  });
  // $("#modeDiv").click(function () {
    //   console.log($('#mode').html());
    //   let modeContent = $('#mode').html();
    //     if(modeContent === 'Light Mode'){
    //       $('#mode').html('Dark Mode');
    //       $("body").css("background-color","#F2F2F2");
    //       $("body").css("color","#111517");
    //       $("header").css("background-color","#FFFFFF");
    //       $("header").css("color","#2B3844");
    //       $("article").css("background-color","#FFFFFF");
    //       $(".details").css("background-color","#FFFFFF");
    //       $("#search").css("background-color","#FFFFFF");
    //       $(".select").css("background-color","#FFFFFF");
    //       $(".select").css("color","#2B3844");
    //       $("#search").removeClass('placeHolder');
        
        
    //     } else {
    //       $('#mode').html('Light Mode');
    //       $("body").css("background-color","#202C36");
    //       $("body").css("color","#FFFFFF");
    //       $("header").css("background-color","#2B3844");
    //       $("header").css("color","#FFFFFF");
    //       $("article").css("background-color","#2B3844");
    //       $(".details").css("background-color","#2B3844");
    //       $("#search").css("background-color","#2B3844");
    //       $(".select").css("background-color","#2B3844");
    //       $(".select").css("color","#FFFFFF");
    //       $("#search").addClass('placeHolder');
    
        
    //     }
    // });

    const Navbar = ()=>{

        const changeTheme = ()=>{
            // const darkmode = document.querySelector('.navbar')
    // const grid = document.querySelector('.countriespage')
    // const inputFilter = document.querySelector('input#search')
    // const searchFilter = document.querySelector('select#select')
    // const gridcountries = document.querySelectorAll('.grid.details')

    // darkmode.addEventListener('click', () =>{
      // darkmode.classList.toggle('light-theme')
      // grid.classList.toggle('light-theme')
      // inputFilter.classList.toggle('light-theme')
      // searchFilter.classList.toggle('light-theme')
      // gridcountries.classList.toggle('light-theme')
      // gridcountries.style.background = '#FFFFFF'


      
    // })

    // console.log($('#mode').html());
    let modeContent =$('#mode').html();
        if(modeContent === 'Light Mode'){
            $('#mode').html('Dark Mode');
            $("body").css("background-color","#F2F2F2");
            $("header").css("background-color","#FFFFFF");
            $("header").css("color","#2B3844");
            $("article").css("background-color","#FFFFFF");
            $(".details").css("background-color","#FFFFFF");
            $(".details").css("color","#2B3844");
            }
        else{

            }

    }

    return (
        <>
        <header className="navbar">
            <div className='logo'>
             <h1>Where in the world ?</h1>
           </div>
     
         <div id="modeDivide" className="modeDiv" onClick={()=> changeTheme()}>
         <ion-icon className ="moon-logo" name="moon-outline"></ion-icon><span id="mode">Light Mode</span>
         </div>
         </header>
        
         
        </>
       )
     }


    export default Navbar