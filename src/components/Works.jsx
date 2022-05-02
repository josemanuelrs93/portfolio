import React from 'react'
import Moles from '../assets/pictures/moles.png'
import Students from '../assets/pictures/students.png'

const Works = () => {
  return (
    <div name="works" className='w-full h-auto'>
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center py-[180px] overflow-clip">
          <div>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600'>Check out some of my recent works</p>
            <p className='text-3xl pt-8 text-[#fbeed0]'>Click in one of these projects to see it in real time</p>
          </div>

          <div className="w-full grid grid-flow-row-dense grid-cols-2 my-10 gap-7">

            <div>
              <a href="https://josemanuelrs93.github.io/moles/" rel="noreferrer" target="_blank">
                <img className='px-4 hover:translate-y-5 hover:saturate-150 duration-300 h-full' alt="" src={Moles} />
                <p className='text-3xl text-gray-300 pt-4 text-center'>Moles</p>
              </a>

            </div>

            <div>
              <a href="https://josemanuelrs93.github.io/students/" rel="noreferrer" target="_blank">
                <img className='px-4 hover:translate-y-5 hover:saturate-150 duration-300 h-full' alt="" src={Students} />
                <p className='text-3xl text-gray-300 pt-4 text-center'>Students</p>
              </a>

            </div>

          </div>

        </div>
    </div>

  )
}

export default Works
