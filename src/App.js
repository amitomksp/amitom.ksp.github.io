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
import Skills from './component/Skills';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>,
  },
  { 
    path: '/project',
    element: <Projectspage></Projectspage>,
  },
  { 
    path: '/about',
    element: <Aboutpage></Aboutpage>,
  },
  { 
    path: '/skills',
    element: <Skills></Skills>,
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
