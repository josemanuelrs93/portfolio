import React, {useState} from 'react'
import RS from "../assets/pictures/rs-logo.jpg";
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-6 bg-black text-gray-300'>
      <div>
        <img className='h-16'src={RS} alt="" />
      </div>

      <ul className='hidden md:flex'>
        <li className='text-gray-400 hover:text-indigo-400 duration-300'>
          <Link to="home">
            Home
          </Link>
        </li>
        <li className='hover:text-indigo-500 duration-300'>
          <Link to="skills">
            Skills
          </Link>
        </li>
        <li className='hover:text-indigo-500 duration-300'>
          <Link to="works">
            Works
          </Link>
        </li>
        <li className='hover:text-indigo-500 duration-300'>
          <Link to="contact">
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex col justify-center items-center'}>
        <li>
          <Link onClick={handleClick} to="home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="skills">
            Skills
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="works">
            Works
          </Link></li>
        <li>
          <Link onClick={handleClick} to="contact">
            Contact
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar
