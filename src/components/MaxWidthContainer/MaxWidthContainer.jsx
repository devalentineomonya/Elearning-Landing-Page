import React from 'react'

const MaxWidthContainer = ({children}) => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-[1280px] bg-red-400 '>
            {children}
        </div>
      
    </div>
  )
}

export default MaxWidthContainer
