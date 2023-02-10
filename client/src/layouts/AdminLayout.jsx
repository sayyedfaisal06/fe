import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

function AdminLayout() {
  return (
    <Fragment>
      <Sidebar />
      <Outlet />
    </Fragment>
  )
}

export default AdminLayout