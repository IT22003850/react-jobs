import { Outlet } from "react-router-dom";

import React from 'react'
import NavBar from '../components/NavBar'

const Mainlayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Mainlayout