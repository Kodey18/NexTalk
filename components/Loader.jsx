import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div>
      <Image 
        src={'/images/loading-circle.svg'}
        alt='loading image'
        height={50}
        width={50}
      />
    </div>
  )
}

export default Loader