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