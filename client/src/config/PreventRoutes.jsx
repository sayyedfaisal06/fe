import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PreventRoutes({ isAuthenticated }) {

  return (
    isAuthenticated ? <Navigate to={-1} /> : <Outlet />
  )
}

export default PreventRoutes