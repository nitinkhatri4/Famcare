import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='grid grid-cols-2 justify-betwee n text-lg text-left py-5 px-10'>
          <div className='flex flex-col'>
              <p>© 2024 FamCare</p>
              <p className='font-bold'>FamCare</p>
          </div>
          <div className='grid grid-cols-3'>
            <div>
              <p>Features</p>
            </div>
            <div>
              <p>Company</p>
            </div>
            <div>
              <p>Legal</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer