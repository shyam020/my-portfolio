import React from 'react';
import  { useState } from "react";
import html from '../assects/html.png';
import css from '../assects/css.png';
import scss from '../assects/sass.png'; 
import less from '../assects/Less.js.png'
import javascript from '../assects/js.png';
import reactjs from '../assects/react.svg';
// import nextjs from '../assects/nextjs.svg';
import tailwind from '../assects/Tailwind CSS.png';
import reactbootstrap from '../assects/React Bootstrap.png';
import matiralui from '../assects/Material UI.png'
import redux from '../assects/Redux.png'

//backed 
import nodejs from '../assects/Node.js.png';
import expressjs from '../assects/Express.png';
import mongodb from '../assects/MongoDB.png';
import mysql from '../assects/SQLite.png';


//tools
import git from '../assects/Git.png';
import github from '../assects/github (2).png';
import bitbucket from '../assects/BitBucket.png';
import postman from '../assects/Postman.png';

//softskill
import softskill from '../assects/group.png';
import leadership from '../assects/leadership.png';
import teamwork from '../assects/collaborative.png';



import FrontendIcon from "../assects/Fronrend.png";
import BackendIcon from "../assects/Backend.png";
import ToolsIcon from "../assects/Tools.png";
import softskillIcon from "../assects/skill-development.png";



const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

   const categoryIcons = {
    Frontend: FrontendIcon,
    Backend: BackendIcon,
    Tools: ToolsIcon,
    Softskill: softskillIcon,
  };
  const skillsData = {
  
   Frontend: [
  
      { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
      { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
      { id: 3, src: scss, title: 'SCSS', style: 'shadow-pink-500' },
       { id: 4, src: less, title: 'LESS CSS', style: 'shadow-pink-500' },
      { id: 5, src: tailwind, title: 'TAILWIND', style: 'shadow-blue-500' },
      { id: 6, src: javascript, title: 'JAVA SCRIPT', style: 'shadow-yellow-500' },
      { id: 7, src: reactjs, title: 'REACT JS', style: 'shadow-blue-500' },
      { id: 8, src: redux, title: 'REDUX', style: 'shadow-white'},
      { id: 9, src: reactbootstrap, title: 'REACT BOOTSTRAP', style: 'shadow-white' },
       { id: 10, src: matiralui, title: 'MATERIAL UI', style: 'shadow-white' },
      // { id: 11, src: nextjs, title: 'NEXT JS', style: 'shadow-white' },
    
    ],
    
     Backend: [
       { id: 1, src: nodejs, title: 'NODE JS', style: 'shadow-green-500' },
       { id: 2, src: expressjs, title: 'EXPRESS JS', style: 'shadow-white' },
        { id: 3, src: mongodb, title: 'MONGO DB', style: 'shadow-green-500' },
        { id: 4, src: mysql, title: 'MYSQL', style: 'shadow-white' },
    ],
      Tools: [
        { id: 1, src: git, title: 'GIT', style: 'shadow-white' },
        { id: 2, src: github, title: 'GITHUB', style: 'shadow-white' },
        { id: 3, src: bitbucket, title: 'BIT BUCKET', style: 'shadow-white' },
        { id: 4, src: postman, title: 'POSTMAN', style: 'shadow-white' },
    ],
      Softskill : [
        { id: 1, src: softskill, title: 'COMMUNICATION', style: 'shadow-white' },
        { id: 2, src: leadership, title: 'LEADERSHIP', style: 'shadow-white' },
        { id: 3, src: teamwork, title: 'TEAMWORK', style: 'shadow-white' },

    ],
     
  };
   const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, []);
  };

  return (
    <div name='Skills' className='bg-gradient-to-b from-black to-gray-900 w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white'>
        <div className='mt-20'>
          <p className='text-4xl font-bold p-2 inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-6'>These are the technologies I've worked with</p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
            {Object.keys(skillsData).map((category, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-center justify-center cursor-pointer  transition-all duration-300 ease-in-out text-xl ${
                  selectedCategory === category
                    ? "bg-gray-500 text-white"
                    : "bg-gray-700 text-white hover:bg-gray-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <img
                  src={categoryIcons[category]}
                  alt={`${category} icon`}
                  className="w-10 h-10 mr-2"
                />
                {category}
              </div>
            ))}
            </div>
            <div className=" text-white min-h-[200px]">
          {selectedCategory &&
            chunkArray(skillsData[selectedCategory], 2).map(
              (rowSkills, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  { rowSkills.map((skill) => (
                    <div
                      key={ skill.name }
                      className={` bg-gray-500 text-white p-4 rounded flex items-center justify-center w-full text-center  min-h-[100px] transition-all duration-300 transform hover:scale-110 ${skill.style}`}
                    >
                      <img
                        src={skill.src}
                        alt={skill.title}
                        className="w-12 h-12 mr-2"
                      />
                      <p>
                        { skill.title }
                        </p>
                    </div>
                  ))}
                </div>
              )
            )}
           </div>
         </div>
        </div>
      </div>
    </div>
  );
 
}

export default Skills;
