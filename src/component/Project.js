import React from 'react'
import './css/Project.css'
import {AllProjects} from './Data' 


function Projects() {
  return (
    <section id='projects'>
    <div className='projectContainer'>
       
       <h1 className='heading'>Apps  I've<span> Built</span></h1>
       <div className='about-it'>"Exploring various domains of software development, I've embarked on a journey filled with creativity, problem-solving, and continuous learning. Each project showcases not only my technical skills but also my passion for innovation and attention to detail. From crafting intuitive user interfaces to architecting robust backend systems, I strive to deliver solutions that exceed expectations."</div>
       
        <div className='myallproject'>
          {AllProjects.map((allProj)=>(
            
           <a className='imagelink'  href={allProj.link} key={allProj.image}>
           <div className='projimage'>
             <img src={allProj.image} alt=""/>
           </div>
           <a className='project-title'>Title: {allProj.title}</a>
         </a>
          ))}
          
          
        </div>
       
       </div> 
      </section>
  )
}

export default Projects