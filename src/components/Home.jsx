import React from 'react'
import Me from "../assets/pictures/me.jpg";
import MyCV from "../assets/files/CV.pdf";

const Home = () => {
  return (
    <div name='home' className='w-full h-auto'>
      <div className='max-w-[1000px] mx-auto py-[230px] px-8 flex flex-col justify-center h-full '>
        <img className='w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto' src={Me} alt=""/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className='text-5xl text-right font-bold'>Hello there, my name is Jose Manuel!</p>
            <p className='text-3xl pt-8 text-[#fbeed0]'> Im an enthusiast full-stack developer based in Spain, willing to expand my knowledge and put into practice my skills.</p>
          </blockquote>
        </div>
        <button className='p-3 bg-gradient-to-r from-indigo-500 to-pink-600 text-2xl font-bold text-gray-200 hover:text-yellow-200 duration-300' type="submit">
          <a href={MyCV} target="_blank" rel="noreferrer" download="robles_sanchez_jose_manuel_CV.pdf">Click here to download my CV</a>
        </button>
      </div>
    </div>
  )
}
export default Home
