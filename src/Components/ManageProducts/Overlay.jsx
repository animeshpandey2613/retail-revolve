import React from 'react'
import Image from "../../images/Manage Products3.webp"
function Overlay() {
  return (
    <div className='w-screen h-screen fixed top-0 left-0'>
        <img src={Image} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default Overlay