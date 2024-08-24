import React from "react"
import { useState } from "react";
import "./css/TrSkills.css"

const TrSkills = () => {
  const skillset = {
    skills: {
      cpp: { id: 'cpp', name: 'C/C++' },
      bash: { id: 'bash', name: 'Bash' },
      git: { id: 'git', name: 'Git' },
      html: { id: 'html', name: 'HTML/CSS' },
      java: { id: 'java', name: 'Java' },
      javascript: { id: 'javascript', name: 'JavaScript' },
      linux: { id: 'linux', name: 'Linux' },
      nodejs: { id: 'nodejs', name: 'NodeJS' },
      powershell: { id: 'powershell', name: 'Powershell' },
      python: { id: 'python', name: 'Python' },
      react: { id: 'react', name: 'ReactJS' },
      sql: { id: 'cpp', name: 'SQL' }
    },
    categories: {
      all: { id: 'all', name: 'All', skillsLs: ["react", "bash", "cpp", "git", "html", "java", "javascript", "linux", "nodejs", "powershell", "python", "sql"] },
      linux: { id: 'linux', name: 'Linux', skillsLs: ['linux', 'bash'] },
      prog: { id: 'prog', name: 'Programming languages', skillsLs: ['cpp', 'java'] },
      script: { id: 'script', name: 'Scripting languages', skillsLs: ['python', 'javascript', 'powershell', 'bash'] },
      web: { id: 'web', name: 'Web', skillsLs: ['html', 'javascript', 'nodejs', 'react'] },
      vcs: { id: 'vcs', name: 'Version Control', skillsLs: ['git'] },
      db: { id: 'db', name: 'Database', skillsLs: ['sql'] },
      framework: { id: 'framework', name: 'Web framework', skillsLs: ['nodejs'] },
      frontend: { id: 'frontend', name: 'Frontend framework', skillsLs: ['react'] },
    }
  }

  const [currCategory, setCurrCategory] = useState('all');

  const skillCategoryComp = (
    <div className="category-wrapper">
      <ul className="category">
        {Object.keys(skillset.categories).map(id => (
          <li id={id} key={id}>
            <button type="button" className={id === currCategory ? 'active' : ''} onClick={() => { setCurrCategory(id) }}>
              {skillset.categories[id].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  const skillsComp = (
    <div className="skills">
      {skillset.categories[currCategory].skillsLs.map((id, i) => (
        <p key={i} className="skill">
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
          {skillset.skills[id].name}
        </p>
      ))}
    </div>
  )

  return (<>
    <div className="skills-section">
      <div>{skillCategoryComp}</div>
      <div>{skillsComp}</div>
    </div>
    </>
  )
}

export default TrSkills;