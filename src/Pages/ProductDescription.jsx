import React from 'react'
import DescriptionOverlay from '../Components/productDescription/DescriptionOverlay'
import { useParams } from 'react-router-dom'
function Description() {
  const ID = useParams();
  return (
    <div>
        <DescriptionOverlay ID= {ID}/>
    </div>
  )
}

export default Description