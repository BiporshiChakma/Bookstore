import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Card = ({ imageSrc, altText }) => {
  return (
    <div className="relative">
      <div className="flex pl-[12rem] pb-2">
        <ShoppingCart className="absolute bg-[#cc9600] text-white w-10 h-9 rounded-md" />
      </div>
      <img src={imageSrc} alt={altText} className="w-[240px]" />
    </div>
  );
};

export default Card;
 