import React from 'react'
import { About, Contact, Courses, Footer, Home, Navbar, StudentLife, Teacher } from '../components'

function Main() {

  return (
    <div className="font-Poppins bg-Solitude dark:bg-slate-800 transition-all duration-300">
      
      <Navbar/>
      <Home/>
      <StudentLife/>
      {/* <Events/> */}
      <Courses/>
      <Teacher/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Main