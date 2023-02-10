import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AssignedRoutes = ({allowedRoles, role}) => {
    const location = useLocation();
  return (
    allowedRoles.includes(role) ? <Outlet /> : <Navigate to='/unauthorized' state={{ from: location }} replace={true} />
  )
}

export default AssignedRoutes