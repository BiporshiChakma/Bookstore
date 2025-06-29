import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

const Sidebar = () => {
  return (
    <div className='bg-white min-h-screen px-5'>
        <div className='flex flex-col
        justify-between
        min-h-screen'>
          <div>
            <h1 className='mb-5 font-bold uppercase'>Bookstore Dashboard</h1>
            <Searchbar/>
            <Navbar/>
          </div>
          <p>Bottom section</p>
        </div>
    </div>
  )
}

export default Sidebar