import React from 'react'

const Cart = ({index,url,writer,price}) => {
  return (
     <div className='border-4 w-fit  h-fit flex flex-col px-12 py-4'>
            <img src={url} alt={`Book ${index}`} />
            <h1 className='font-bold'>Thunmanhandiya</h1>
            <p className='font-semibold'>{writer}</p>

            <p className='pt-5 font-semibold text-xs'>{price}</p>
            <p className='text-xs'>Available across all branches</p>
            <div className='border-2 border-[#cc9600] text-center mt-4 rounded-lg'>
                <p>Add to cart</p>
            </div>
            </div>
  )
}

export default Cart