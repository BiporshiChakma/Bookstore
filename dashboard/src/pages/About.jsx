import React from 'react'

const branches = [
    {
      name: 'Kurunegala',
      address: 'Main Street, City Center',
      contact: '126691269',
      hours: 'Monday to Saturday 9 AM - 7 PM',
      details: 'In-store shopping, student discounts, workshops, study spaces',
    },
    {
      name: 'Colombo',
      address: 'Liberty Plaza, 2nd Floor',
      contact: '0112123456',
      hours: 'Monday to Sunday 10 AM - 8 PM',
      details: 'Exclusive deals, free WiFi, book café inside',
    },
    {
      name: 'Kandy',
      address: 'Hilltop Road, Near Clock Tower',
      contact: '0811234567',
      hours: 'Monday to Friday 8 AM - 6 PM',
      details: 'Study corners, printing service, local authors section',
    },
  ];
const About = () => {
  
  return (
    <div className='bg-black w-screen h-auto py-10' >
   <img src='./Rectangle 53.png' className='w-screen pt-5'></img>
     <div className='px-16 flex flex-col gap-4'>
      <h1 className='text-[#cc9600] text-3xl'>About Us</h1>
      <p className='text-white text-[17px] text-justify'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      </p>
     
    <div className='flex flex-col gap-4 pt-10'>
       <h1 className='text-[#cc9600] text-2xl'>Our Branches</h1>
          <div className='leading-6 flex flex-wrap gap-6 justify-around   p-6'>
      {branches.map((branch, index) => (
        <div key={index} className='text-white text-center p-4 border rounded-lg  w-64'>
          <h1 className='text-yellow-400 font-semibold text-2xl'>{branch.name}</h1>
          <p>{branch.address}</p>
          <p>Contact: {branch.contact}</p>
          <p>Operating Hours: {branch.hours}</p>
          <p>{branch.details}</p>
        </div>
      ))}
    </div>
     </div>
     <div className='flex flex-col gap-4 pt-16'>
       <h1 className='text-[#cc9600] text-2xl text-center'>Our Commitment</h1>
       <p className='text-white text-[17px] text-justify'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
        undoubtable source.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
        undoubtable source.
      </p>
     </div>
     </div>
    </div>
  )
}

export default About