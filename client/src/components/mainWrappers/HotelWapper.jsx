import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function HotelWapper() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default HotelWapper