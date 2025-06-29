import React from 'react'

const FavReader = () => {
  return (
   <section>
     <div className='w-full flex px-10 bg-black mt-[15rem] py-36'>
            <div className='w-[50%]'>
                <img src='./Rectangle 21.png'></img>
            </div>
            <div className='w-[50%] text-white flex flex-col gap-2'>
                <h1 className='text-4xl font-mono font-semibold'>Your Favourite <span 
                className='text-[#cc9600]'>
                    Reads <br></br> Are Here!</span></h1>
                <p className='text-[16px]'>
                    Buy your favourite books online with case! Enjoy exclusive offer and 
                    discounts on seleted titles.Dive into our collection and find special
                    deals that make reading more affordaable. Shop now and unlock more saving with every purchase!
                </p>
                <div className='text-[#cc9600] flex justify-between pt-5'>
                    <span className='flex flex-col gap-2'>
                        <p className='text-4xl'>800+</p>
                        <p>Book Listing</p>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <p className='text-4xl'>1K+</p>
                        <p>Registered Members</p>
                    </span>
                    <span className='flex flex-col gap-2'>
                        <p className='text-4xl'>50+</p>
                        <p>Branch Count</p>
                    </span>
                </div>
            </div>
           
    </div>
  
   </section>
  )
}

export default FavReader