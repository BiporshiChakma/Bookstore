import React from 'react'

import { LayoutDashboard,User,Proportions,Earth,MessageCircle  } from 'lucide-react';
import Navlink from './Navlink';

const navigation =[
     {
          id:1,
          name: "Dashboard",
          path: "/",
          icon:   <LayoutDashboard />
     },
       {
          id:2,
          name: "Customers",
          path: "/",
          icon:   <User />
     },
      {
          id:3,
          name: "All Reports",
          path: "/",
          icon:    <Proportions />
     },
      {
          id:4,
          name: "Geography",
          path: "/",
          icon:    <Earth />
     },
      {
          id:5,
          name: "Conversation",
          path: "/",
          icon:     <MessageCircle />
     }
     
]
const Navbar
 = () => {
  return (
   <nav className='list-none flex flex-col gap-2 pt-4'>
       {
           navigation.map(navItem =>(
                <Navlink  key={navItem.id} 
              name={navItem.name} 
              path={navItem.path} 
              icon={navItem.icon}/> 
           ))
       }
   </nav>
  )
}
{/* 49 mins*/}
export default Navbar
