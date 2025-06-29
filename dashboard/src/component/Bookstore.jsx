import React from 'react'
import { ShoppingCart } from 'lucide-react';
import Card from './Card';

const cardsData = [
  { id: 1, imageSrc: '/best books (3).png', altText: 'Book 1' },
  { id: 2, imageSrc: '/best books (2).png', altText: 'Book 2' },
  { id: 3, imageSrc: '/best books (3).png', altText: 'Book 3' },
  { id: 3, imageSrc: '/best books.png', altText: 'Book 3' },
];
const Bookstore = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-[10rem]'>
        <h1 className="text-5xl font-semibold pb-16">Our Best Picks</h1>
        <div className='flex gap-10'> 
           {cardsData.map((card) => (
        <Card key={card.id} imageSrc={card.imageSrc} altText={card.altText} />
      ))}
        </div>
    </div>
  )
}

export default Bookstore