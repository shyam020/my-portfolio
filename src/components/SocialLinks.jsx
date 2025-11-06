import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const socialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkendIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shyam-patel-1312a62a8/",  
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:patelshyam.au18352@gmail.com",  
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shyam020",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={ 30 } />
        </>
      ),
      href: "/Resume.pdf",
      download: true,
    },
   ];

  return (
    <div className=' hidden lg:flex flex-col  top-[35%] left-0 fixed'>
      <ul>

        { links.map(({id, child, href, download }) => (
            <li key={id} className={ 'flex justify-center items-center w-40 h-12 px-4  bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'  }>
              <a href={href} className='flex justify-between items-center w-full text-white' download={ download }
                target='_blank' rel='noreferrer'
             > 
              {child}
          </a>
        </li>
      ))}
     </ul>
  </div>
  );
};

    
export default socialLinks;