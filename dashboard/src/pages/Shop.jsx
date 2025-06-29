import React from 'react'
import Cart from '../component/Cart'

const bookfilter = [
    { id: 1, heading: "All"},
    { id: 2, heading: "Novel" },
    { id: 3, heading: "Translations" },
    { id: 4, heading: "Kids Stories"},
];
const cart = [
    { 
      index:1, 
      url:"./Rectangle 30.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
     { 
      index:2, 
      url:"/Rectangle 32.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
     { 
      index:3, 
      url:"/Rectangle 34.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
      { 
      index:4, 
      url:"/Rectangle 34.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
     { 
      index:5, 
      url:"/Rectangle 34.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
     { 
      index:6, 
      url:"/Rectangle 34.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
     { 
      index:7, 
      url:"/Rectangle 32.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
    { 
      index:1, 
      url:"./Rectangle 30.png",
      writer: "Mahagamasekara",
      price: "Rs 700/-"
    },
]

const Shop = () => {
  return (
    <div className='w-full  pt-[5rem] pb-32'>
        <h1 className='text-[#cc9600] text-4xl font-semibold text-center'>Explore All Books Here</h1>
        <div className='flex gap-6 justify-center items-center py-10'>
            
            {
                bookfilter.map(
                    (filterd,index)=>(
                        <div key={index} className='text-black'>
                            <p className='text-2xl font-semibold'>{filterd.heading}</p>
                        </div>
                )
                )
            }
        </div>
        <div className='px-10 flex justify-center gap-6 flex-wrap'>
           {
            cart.map(
                (carts,index)=>(
                  <Cart
                    key={index}
                    index={carts.index}
                        url={carts.url}       
                        writer={carts.writer}
                         price={carts.price}
                    
                   />
                )
            )
           }
         
        </div>
    </div>
  )
}

export default Shop