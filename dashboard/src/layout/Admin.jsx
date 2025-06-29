
import React from 'react'
import { Outlet } from 'react-router'
import Sidebar  from '../component/SideBar'

const Admin = () => {
  return (
    <section>
        <div className='flex w-full min-h-screen'>
            <div className='w-3/12 pl-2'>
                <Sidebar/>
            </div>
            <main className='w-9/12'>
                    <Outlet/>
            </main>
        </div>
    </section>
  )
}

export default Admin