import React from 'react'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
       <Header/>
       <Outlet/>
       <NavBar/>
    </div>
  )
}

export default Layout
