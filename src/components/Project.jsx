import React from 'react';
// import todolist from "../assects/gfg.png";
import Docsmini from  "../assects/Docs-mini.png";

const Project = () => {

  const projects = [
    {
      id: 1,
      src: Docsmini,
      link: 'https://github.com/shyam020/Docs-mini',
         websiteLink: 'https://docs-mini.netlify.app/',
    },
  //   {
  //     id: 2,
  //     src: todolist,
  //     link: 'https://github.com/shyam020',
  //         websiteLink: 'https://www.linkedin.com/in/shyam-patel-1312a62a8/',
  //   },
  //   {
  //     id: 3,
  //     src: todolist,
  //     link: 'https://github.com/shyam020',
  //         websiteLink: 'https://www.linkedin.com/in/shyam-patel-1312a62a8/',
  //   },
  //   {
  //     id: 4,
  //     src: todolist,
  //     link: 'https://github.com/shyam020',
  //         websiteLink: 'https://www.linkedin.com/in/shyam-patel-1312a62a8/',
  //   }, {

  //     id: 5,
  //     src: todolist,
  //     link: 'https://github.com/shyam020',
  //         websiteLink: 'https://www.linkedin.com/in/shyam-patel-1312a62a8/',
  //   },
  // {
  //          id: 6,
  //   src: todolist,
  //   link: 'https://github.com/shyam020',
  //         websiteLink: 'https://www.linkedin.com/in/shyam-patel-1312a62a8/',
  //   },
  ]
  return (
    <div name="projects" className=' h-full  w-full bg-gradient-to-b from-black via-black to-gray-900  text-white'>
      <div className='max-w-screen-lg px-4 py-12 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-20 '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work right here.</p>
        </div>
  <div  className='grid sm:grid-col-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
        {
          projects.map(({ id, src,link,websiteLink }) => (
            
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
            <img src={ src } alt="" srcset="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'onClick={()=>window.open(websiteLink, "_blank")}>Website</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'  onClick={() => window.open(link, "_blank")}>Source</button>
              </div>
          </div>
      
          ))
       }

        </div>
      </div>
    </div>
  )
}

export default Project
