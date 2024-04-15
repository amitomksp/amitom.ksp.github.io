import React from 'react'
import './css/Project.css'
import {AllProjects} from './Data' 


function Projects() {
  return (
    <section id='projects'>
    <div className='projectContainer'>
       <div className='icon'><svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2.5}
  stroke="currentColor"
  width="88" 
  height="88" 
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
  />
</svg>
 </div>
       <h1 className='heading'>Apps  I've<span> Built</span></h1>
       <div className='about-it'>"Exploring various domains of software development, I've embarked on a journey filled with creativity, problem-solving, and continuous learning. Each project showcases not only my technical skills but also my passion for innovation and attention to detail. From crafting intuitive user interfaces to architecting robust backend systems, I strive to deliver solutions that exceed expectations."</div>
       <button className="view-all" onClick={()=>{}}>
            View All
        </button>
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