import React from 'react';


import { IoMdArrowDropright } from "react-icons/io";

const Home = () => {
  return (
    <div  name ="home" className='h-screen  w-full bg-gradient-to-b from-black via-black to-gray-900 '>
     <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col h-full justify-center'>
          <h2 className='text-4xl md:text-7xl font-bold text-white'>
            I'm a front-end developer
          </h2> 
          <p className='text-gray-500 py-4 max-w-md'>
            I have experience in building websites and web applications. I specialize in front-end technologies like HTML, CSS, JavaScript, React, and more.
          </p>
          <div>
            <button className=' group text-white  w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 gap-2 cursor-pointer  ' >
              portfolio   <span className='group-hover:rotate-90 duration-200 font-bold'><IoMdArrowDropright size={25} /></span>
            </button>
          </div>
        </div>

       
      </div>
     
    </div>
  )
}

export default Home;
