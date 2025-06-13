import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <>
      <div className='border-2 border-black p-2 px-4'>
            <div className='flex gap-10 justify-between items-center'>
                <p className='font-bold text-[20px]'>FamCare</p>
                <div>
                    <ul className='flex flex-row gap-20'>
                        <li className='hover:w-40 hover:rounded-2xl hover:bg-black hover:text-white'><Link to='/home'>Home</Link></li>
                        <li className='hover:w-40 hover:rounded-2xl hover:bg-black hover:text-white'><Link to='/feature'>Features</Link></li>
                        <li className='hover:w-40 hover:rounded-2xl hover:bg-black hover:text-white'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='flex flex-row gap-10'>
                    <button className='bg-gray-300 w-20 rounded-2xl'><Link to='/sign_in'>Sign In</Link></button>
                    <button className='bg-gray-300 w-20 rounded-2xl'><Link to='/sign_up'>Sign Up</Link></button>
                </div>
            </div>
      </div>
    </>
  )
}

export default Nav