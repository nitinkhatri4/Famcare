import React from 'react'

const Benefits = () => {
    
  return (
    <>
        <div className='px-10 py-10'>
            <div className='text-left'>
                <p className='text-5xl font-bold'>Comprehensive Features</p>
                <p className='text-2xl my-4'>Explore the robust features that set FamCare apart in remote patient monitoring</p>
            </div>
            <div className='border-2 border-gray-200 shadow-black shadow-lg rounded-lg px-10 py-10 grid grid-cols-2 gap-10 text-left'>
                <div>
                    <div>
                        <img className='h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSzutoKLpGNiin8Txt5qTBh-dhfYs7oYdO8J2o3aWbf2jlhBo'></img>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>User-Friendly</p>
                        <p>Our intuitive interface ensures healthcare professionals can efficiently monitor patients without extensive training.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='h-10' src='data:image/png;base64,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'></img>
                    </div>
                    <p className='text-xl font-bold'>Customizable</p>
                    <p>Personalize your monitoring setup to suit specific patient needs and healthcare standards.</p>
                </div>
                <div>
                    <div>
                        <img className='h-10' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPRr29dGgxtYGzT1ImYVpUqUl9bQM-eJXK8AxhwioCmhwDmQgY'></img>
                    </div>
                    <p className='text-xl font-bold'>Multi-Device</p>
                    <p>Monitor patients from any device, enabling flexibility and ease of access for healthcare providers.</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Benefits
