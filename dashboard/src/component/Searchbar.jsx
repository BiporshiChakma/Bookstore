import React from 'react'
import { Search } from 'lucide-react'

const Searchbar
 = () => {
  return (
    <div className='flex border-2 w-full gap-2 px-2 py-2 rounded-lg'>
        <Search className='text-gray-400'/>
        <input placeholder='Seaech' className='outline-none'></input>
    </div>
  )
}

export default Searchbar
