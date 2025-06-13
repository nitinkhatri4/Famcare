import React from 'react'

const Common_QNA = () => {
  return (
    <div className='text-left py-10 px-10'>
        <div>
            <p className='font-bold text-5xl'>Common Questions</p>
        </div>
        <div className='py-5'>
            <p className='font-medium text-2xl'>Find answers to frequently asked questions about CareConnect and its functionalities.</p>
        </div>
        <div className='grid grid-cols-2 gap-10'>
            <div>
                <p className='font-bold text-lg'>How secure is my patient data?</p>
                <p className='text-lg'>Patient data is protected with top-tier encryption protocols, ensuring it meets all healthcare security regulations.</p>
            </div>
            <div>
                <p className='font-bold text-lg'>Can I integrate this with our existing system?</p>
                <p className='text-lg'>Absolutely! CareConnect is designed to seamlessly integrate with various healthcare management systems.</p>
            </div>
            <div>
                <p className='font-bold text-lg'>How quickly can I get started?</p>
                <p className='text-lg'>Setup is quick and straightforward. You can start monitoring patients almost immediately after registration.</p>
            </div>
            <div>
                <p className='font-bold text-lg'>What kind of support is available?</p>
                <p className='text-lg'>Our dedicated support team is available 24/7 to assist with any issues or questions you may have.</p>
            </div>
        </div>
    </div>
  )
}

export default Common_QNA
