import React from 'react'

const Team = () => {
  return (
    <div>
            <div className='flex gap-40 text-left py-10 px-10'>
            <div className='w-2/5'>
                <p className='text-5xl font-bold'>Our Team</p>
                <p className='text-2xl font-medium'>Get to know an amazing group of People on a mission to make a difference.</p>
            </div>
            <div className='grid grid-cols-2 gap-10 text-lg'>
                <div>
                    <p className='font-bold'>Mohammad Anish</p>
                    <p>Founder & CEO</p>
                </div>
                <div>
                    <p className='font-bold'>Mohit Samota</p>
                    <p>Co-founder & CTO</p>
                </div>
                <div>
                    <p className='font-bold'>Nitin Khatri</p>
                    <p>Co-founder & CFO</p>
                </div>
                <div>
                    <p className='font-bold'>Piyush Choudhary</p>
                    <p>Co-founder & CMO</p>
                </div>
            </div>
        </div>
        <hr className='h-px bg-gray-200'></hr>
    </div>
  )
}

export default Team
