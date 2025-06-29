import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
  return (
    <section className='w-screen'>
        <div>
            <Navbar/>
        </div>
        <div className='w-full'>
            <Outlet/>
        </div>
        <div>
          <Footer/>
        </div>
    </section>
  )
}

export default Homelayout