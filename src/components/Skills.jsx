import React from 'react';
import html from '../assects/html.png';
import css from '../assects/css.png';
import scss from '../assects/sass.png'; 
import javascript from '../assects/js.png';
import reactjs from '../assects/react.svg';
import nextjs from '../assects/nextjs.svg';
import github from '../assects/github (2).png';

const Skills = () => {
  const skills = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: scss, title: 'SCSS', style: 'shadow-pink-500' },
    { id: 4, src: css, title: 'TAILWIND', style: 'shadow-blue-500' },
    { id: 5, src: javascript, title: 'JAVA SCRIPT', style: 'shadow-yellow-500' },
    { id: 6, src: reactjs, title: 'REACT JS', style: 'shadow-blue-500' },
    { id: 7, src: nextjs, title: 'NEXT JS', style: 'shadow-white' },
    { id: 8, src: github, title: 'GITHUB', style: 'shadow-white' },
  
    
  ];

  return (
    <div name='Skills' className='bg-gradient-to-b from-black to-gray-900 w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white'>
        <div className='mt-20'>
          <p className='text-4xl font-bold p-2 inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-6'>These are the technologies I've worked with</p>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
            {skills.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
