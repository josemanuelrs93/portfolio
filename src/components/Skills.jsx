import React from 'react'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-auto overflow-hidden'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center pb-6'>
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-pink-600">Experience</p>
          <p className='text-3xl pt-8 text-[#fbeed0]'>These are the languages and tools with that I work the most</p>
        </div>
        <div name="icons" className='w-full grid grid-flow-row-dense grid-cols-4 mt-5 py-8 px-9 gap-16'>
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java" />
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react"/>
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php"/>
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original-wordmark.svg" alt="symfony"/>
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html"/>
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css"/>
          <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
