import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

function UserLayout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  )
}

export default UserLayout