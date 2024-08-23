import React from "react";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Project";
import ContactMeSection from "../contactme"
import Navbartl from "../Navbartailwind";


function Homepage() {

    return (
      <>
        <Navbartl></Navbartl>
         <Home></Home>
         <Skills></Skills>
         <ContactMeSection></ContactMeSection>
         </>
      
    )
  }
  
  export default Homepage