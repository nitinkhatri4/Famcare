import React from 'react'
import img from '../../assets/Cover_Screen.jpg'

const Learn_More = () => {
  return (
    <>
        <div className='min-h-[90vh]'>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white p-10 rounded-lg shadow-md w-1/2 grid grid-cols-3 gap-2'>
                  <div className='flex flex-col justify-around'>
                    <p>Live vitals of the patient to the doctor.</p>
                    <p>Provides the details of the patients medical history.</p>
                  </div>
                  <div>
                    <img src= {img} className='w-56'></img>
                  </div>
                  <div className='flex flex-col justify-around'>
                    <p>Electronic health record management.</p>
                    <p>Provides the service of online appointment booking.</p>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Learn_More