import React from 'react'
import Dashnav from '../../../components/dashboard-nav-and-side/Dashnav'
import Sidebar from '../../../components/dashboard-nav-and-side/Sidebar'
import Farmercontent from './Farmercontent'

export default function Farmerdashboard() {
  return (
    <React.Fragment>

      <Sidebar/>
      <Dashnav/>
      <Farmercontent/>

    </React.Fragment>
  )
}
