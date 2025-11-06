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
                 Equipped with skills in JavaScript, ReactJs, Angular, and more, I thrive on navigating the captivating frontiers of frontend design and the steadfast foundations of backend development in web applications. Yet, my dedication to quality and teamwork extends far beyond the code, leaving a mark on every project I embark upon.
        </p>
         <div className='pb-8 mt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Experience</p>
        </div>
        <div className='border rounded-lg border-gray-500 shadow-lg p-4 mt-10  duration-200 hover:scale-105'>
          <div className=' flex justify-between gap-1'>
          <p className='text-2xl font-bold'>Frontend Developer | bhithub Technologies Pvt. LTD</p>
          <p className='text-sm'>Dec 2024 – Sep 2025</p>
        </div>
        <div className='py-4 text-gray-500'>
          <p>I design and develop responsive and user-friendly frontend applications, work with JavaScript frameworks like React, and collaborate closely with team members to deliver high-quality user interfaces.</p>
          </div>
        </div>
          <div className='border rounded-lg border-gray-500 shadow-lg p-4 mt-10  duration-200 hover:scale-105'>
          <div className=' flex justify-between gap-1'>
          <p className='text-2xl font-bold'>Frontend Developer Intern | Coding Gujju</p>
          <p className='text-sm'>Jun 2023 - Jul 2023</p>
        </div>
        <div className='py-4 text-gray-500'>
          <p>During my internship, I gained proficiency in HTML, CSS, JavaScript, and the basics of ReactJS. Leveraging this knowledge, I successfully developed my personal portfolio. This experience not only enhanced my technical skills but also provided me with practical insights into frontend development..</p>
          </div>
          </div>
      </div>
      
       
     
    </div>
  )
}

export default About
