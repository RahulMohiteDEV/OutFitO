import React from 'react'
import Nav from '../features/components/Nav'
import {Outlet} from 'react-router'

const AppLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default AppLayout
