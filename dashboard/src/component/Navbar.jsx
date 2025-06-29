import React from 'react'
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white px-6'>
        <div className='flex justify-center items-center gap-2'>
            <img src='./Rectangle 3.png'></img>
            <h1 className='text-[#cc9600] text-2xl font-semibold font-serif'>
                NETH <br></br>
                BOOKPOINT
            </h1>
        </div>
        <div className='list-none flex gap-12  text-xl justify-center items-center font-serif'>
            <li><Link to='/Home'>Home</Link></li>
             <li><Link to='/About'>About</Link></li>
              <li><Link to='/Shop'>Shop</Link></li>
               <li><Link to='/'>Delivery Team</Link></li>
                <li><Link to='/'>Sellers</Link></li>
        </div>
        <div className='flex justify-center items-center gap-8'>
            <Bell className='text-gray-400'/>
            <div className='flex flex-col justify-center items-center'>
                <Link to="/Admin">
                <img src='./Rectangle 4.png'></img>
                <p className='text-xs'>example@gmail.com</p>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar