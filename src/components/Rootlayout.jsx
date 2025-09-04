import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router'
import Navbar from './Navbar'


const Rootlayout = () => {

  return (
   <>
   <Header />
   <Navbar/>
   <Outlet />
   <Footer />
   </>
  )
}

export default Rootlayout