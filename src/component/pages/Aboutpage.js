import React from "react"

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Navbartl from "../Navbartailwind"
import About from "../About"
function Aboutpage() {
   

    return (
       <>
       <Navbartl></Navbartl>
       <About></About>
       </>
    )
  }
  
  export default Aboutpage