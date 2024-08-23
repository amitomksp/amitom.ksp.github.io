
import React from "react";
import "../css/skillspage.css"
import Navbartl from "../Navbartailwind.js";
import Skills from "../Skills.js";
import TrSkills from "../Skillstriphsti.js";

const SkillsPage = () => {
  return (
    <div>
      <Navbartl></Navbartl>
      <h1 className="title">Things i use daily</h1>
       <TrSkills></TrSkills>
    </div>
    
    
   
  );
};

export default SkillsPage;
