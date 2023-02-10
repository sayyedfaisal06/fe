import React from 'react'
import { useLocation } from 'react-router-dom'

function Unauthorized() {
  
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  return (
    <div>Unauthorized</div>
  )
}

export default Unauthorized