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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>,
  },
  { 
    path: '/project',
    element: <Projectspage></Projectspage>,
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
