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
]);


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
