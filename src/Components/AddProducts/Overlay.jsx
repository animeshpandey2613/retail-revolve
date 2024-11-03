import React from 'react'
import Image from "../../images/addRemoveProImg2.webp"
function Overlay() {
  return (
    <div className='fixed w-screen h-screen top-0 left-0'>
        <img src={Image} alt="back" className='w-full h-full object-cover brightness-75'/>
    </div>
  )
}

export default Overlay