import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-900 p-4  text-white'>
          <div className='flex flex-col  justify-center max-w-screen-lg mx-auto h-full '>
              <div className='pb-8 mt-20'>
                  <p className='text-4xl font-bold p-2 inline border-b-4 border-gray-500'>Contact</p>
                  <p className='py-6'>Get in touch with me.</p>
              </div>
              <div className='flex  justify-center items-center'>
                  <form action="" className='flex flex-col w-full md:w-1/2'>
                      <input type="text" name='Name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ' />

                      <input type="text" name='Email' placeholder='Enter your Email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none ' />
                      <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                      <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                      flex items-center rounded-md hover:scale-110 duration-300 '>Contact Me</button>
                  </form>
              </div>
       </div>
    </div>
  )
}

export default Contact
