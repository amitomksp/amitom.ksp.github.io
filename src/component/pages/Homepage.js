import React from "react";
import Navbar from "../Navbar";
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
         <Projects></Projects>
         <ContactMeSection></ContactMeSection>
         </>
      
    )
  }
  
  export default Homepage