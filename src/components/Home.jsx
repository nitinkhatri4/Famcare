import React from 'react'
import img from '../assets/Patient-Photo.jpeg'
import Slider from './Slider'
import Features from './Features'
import Benefits from './Benefits'
import Common_QNA from './Common_QNA'
import Team from './Team'
import Count from './Count'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col gap-10 py-10 px-10'>
          <div className='h-10 w-60 flex border-2 items-center justify-center rounded-full'>
              <p>Get Started - <a href='#'><Link to='/learn_more'>Learn More</Link></a></p>
          </div>
          <div>
              <p className='font-bold text-[50px] text-left leading-tight'>Seamless Remote Patient Monitoring for Ultimate Care</p>
              <p className='font-light text-xl text-left'>Experience real-time health monitoring, enhance patient outcomes, and streamline workflows with FamCare.</p>
          </div>
          <div className='flex gap-5'>
            <button className='font-bold bg-gray-200 rounded-2xl w-28 h-12'><Link to='/try_now'>Try Now</Link></button>
            <button className='font-bold bg-gray-200 rounded-2xl w-28 h-12'><Link to='/join_us'>Join Us</Link></button>
          </div>
        </div>
        <div className='flex justify-center'>
              <img src={img} className='w-full h-svh object-cover'/>
        </div>
      </div>



      <div className='Components'>
        <Slider />
        <Features />
          {/* {data.counts.map(count => <Count key={count.id} data={count}/>)} */}
        <Count />
        <Benefits />
        <Common_QNA />
        <Team />
      </div>
    </>
  )
}

export default Home
