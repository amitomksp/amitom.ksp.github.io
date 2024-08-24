import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

import Homepage from './component/pages/Homepage';
import Projectspage from './component/pages/Projectpage'
import Aboutpage from './component/pages/Aboutpage';
import SkillsPage from './component/pages/skillspage';
import TrSkills from './component/Skillstriphsti';
import Projectpageold from './component/pages/Projectpageold';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>,
  },
  { 
    path: '/project',
    element: <Projectpageold></Projectpageold>,
  },
  { 
    path: '/about',
    element: <Aboutpage></Aboutpage>,
  },
  { 
    path: '/skills',
    element: <SkillsPage></SkillsPage>,
  },
 
  { 
    path: '/tr-skills',
    element: <TrSkills></TrSkills>,
  },
 

]);


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
