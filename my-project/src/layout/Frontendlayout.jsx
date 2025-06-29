
import React from 'react'
import { Outlet } from 'react-router'
import Mainnav from '../HomeComponent/Mainnav'
const Layout = () => {
  return (
    <section>
       <div className='w-screen'>
        <div className='bg-black w-full h-fit'>
          <Mainnav/>
        </div>
        <div>

        </div>
       </div>
    </section>
  )
}

export default Layout