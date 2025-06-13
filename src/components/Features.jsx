import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <>
        <div className='px-10'>
            <div className='border-2 border-gray-300 rounded-xl grid grid-cols-2 px-10 py-10 shadow-black shadow-lg'>
                <div>
                    <div>
                    <p className='font-bold text-5xl text-left'>Superior Health Monitoring</p>
                    <p className='font-normal text-xl text-left py-2'>Empowering healthcare professionals with real-time data for better patient care and improved outcomes.</p>
                    </div>
                    <div className='flex py-2'>
                        <div className='text-left flex flex-col gap-10'>
                            <div className='row-1 flex gap-10'>
                                <div>
                                <img className='w-20' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCvYtyXREU767LUvuZWdB80DOwGUcXpwGTySSaSWMH34qCzyMB'></img>
                                </div>
                                <div>
                                    <p className='font-bold text-base'>Real-Time Alerts</p>
                                    <p className='font-normal text-base'>Receive immediate notifications on patient status changes, ensuring timely intervention and care.</p>
                                </div>
                            </div>
                            <div className='row-2 flex gap-10'>
                                <div>
                                <img className='w-[70px]' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRzrEq0rLO9kQRTizAuc7us2O9H9bQ0C9bmBwK44QB2cer3xbb'></img>
                                </div>
                                <div>
                                    <p className='font-bold text-base'>Secure Data</p>
                                    <p className='font-normal text-base'>Your patient's health data is encrypted and secure, meeting all regulatory standards.</p>
                                </div>
                            </div>
                            <div className='row-3 flex gap-10'>
                                <div>
                                    <img className='w-20' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTniK3igrbqZ7b-7gHcqM01T_XgcP4tuodLzj0gTPnxQGfHtdrY'></img>
                                </div>
                                <div>
                                    <p className='font-bold text-base'>Easy Integration</p>
                                    <p className='font-normal text-base'>Seamlessly integrates with existing healthcare systems, providing a unified and efficient workflow.</p>
                                </div>
                            </div>
                            <button className='bg-gray-200 w-28 h-10 rounded-xl'><Link to='/feature'>More...</Link></button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='rounded-lg' src='https://files.umso.co/lib_NzBDnSGOloSegeaJ/5217830.jpeg'></img>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Features