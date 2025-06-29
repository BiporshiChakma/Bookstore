import React from 'react'

const Hero = () => {
  return (
   <div className='hero text-white flex flex-col gap-10  pt-14 pb-4 bg-cover'>
       <div className='text-center flex flex-col gap-6'>
         <h1 className='text-[#fe7600] text-5xl font-serif'>The Book Lovers Dreamland Awaits!</h1>
        <p className='text-[1.1rem] px-64 text-center'>
            Welcome to the ultimate book lovers paradise join our community and contribution to the ever-
            evolving library of of stories, where every book has a chance to inspire someone new.
        </p>
       </div>
      
       <div className='flex justify-center items-center'>
          <div className='flex border-2 border-[#fe7600] p-2 rounded-sm w-[25rem] justify-between'>
            <input placeholder='Search a Book' className='bg-transparent'></input>
            <div className=''>
                Search
            </div>
            
        </div>
       </div>
        
       </div>
  )
}

export default Hero