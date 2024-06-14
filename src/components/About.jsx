import React from 'react'

const About = () => {
  return (
    <div name ="about" className='w-full h-full bg-gradient-to-b from-black to-gray-900 text-white' >
          <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
              <div className='pb-8 mt-20'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Who Am I ?</p>  
              </div>
              <p className='text-xl mt-14'> Hello everyone, I'm Shyam Patel, a passionate Software Developer fueled by a journey of constant learning and evolution in the digital realm. </p>

              <br />
              <p className='text-xl'>
                 Equipped with skills in JavaScript, ReactJs, NextJs, Node.js, MongoDB, and more, I thrive on navigating the captivating frontiers of frontend design and the steadfast foundations of backend development in web applications. Yet, my dedication to quality and teamwork extends far beyond the code, leaving a mark on every project I embark upon.
        </p>
         <div className='pb-8 mt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Experience</p>
        </div>
        <div className='border rounded-lg border-gray-500 shadow-lg p-4 mt-10  duration-200 hover:scale-105'>
          <div className=' flex justify-between gap-1'>
          <p className='text-2xl font-bold'> Frontend Developer | bhithub Technologies Pvt. LTD</p>
          <p className='text-sm'>Feb ‘26 - Jun‘30</p>
        </div>
        <div className='py-4'>
          <p>I design and develop full-stack web applications, create and manage MongoDB databases, and build RESTful APIs using Node.js and Express.js. I also collaborate with team members to ensure high-quality software delivery.</p>
          </div>
        </div>
          <div className='border rounded-lg border-gray-500 shadow-lg p-4 mt-10  duration-200 hover:scale-105'>
          <div className=' flex justify-between gap-1'>
          <p className='text-2xl font-bold'>Frontend Developer Intern | Coding Gujju</p>
          <p className='text-sm'>Jun ‘23 - Jul ‘23</p>
        </div>
        <div className='py-4'>
          <p>During my internship, I gained proficiency in HTML, CSS, JavaScript, and the basics of ReactJS. Leveraging this knowledge, I successfully developed my personal portfolio. This experience not only enhanced my technical skills but also provided me with practical insights into frontend development..</p>
          </div>
          </div>
      </div>
      
       
     
    </div>
  )
}

export default About
