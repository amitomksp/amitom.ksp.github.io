import "./css/Skills.css"
import React from "react";
import { skills } from "./Data.js";

const Skills = () => {
  return (
    <section id="skills">
      <div className="SkillsContainer">
        <div className="skillsheading">
          <h1>Skills And <span> Technologies</span></h1>
        </div>
        <div className="skillsabout">
        In addition to my core skills, I am proficient in a variety of technologies and tools commonly used in the industry. I have extensive experience working with languages such as JavaScript, react, and Java, enabling me to develop robust and efficient solutions for a wide range of projects. 
        </div>
        <div className="allskill">
          {skills.map((skill, index) => (
            <div className="skillicon" key={index}>
              <div className="mainicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="w-6 h-6"
                  width="25"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="realskill">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
