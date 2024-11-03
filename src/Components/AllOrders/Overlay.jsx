import React from 'react'
import Back from "../../images/AllOrders.webp"
function Overlay() {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen'>
        <img src={Back} alt="background" className='object-cover w-full h-full brightness-75'/>
    </div>
  )
}

export default Overlay