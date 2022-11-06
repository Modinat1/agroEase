import React from 'react'
import Dashnav from '../../../components/dashboard-nav-and-side/Dashnav'
import Sidebar from '../../../components/dashboard-nav-and-side/Sidebar'
import Brokdbcontent from './Brokdbcontent'


export default function BrokerDashboardPage() {
  return (
    <React.Fragment>
       
       <Sidebar/>
       <Dashnav/>
       <Brokdbcontent/>
       
             
    </React.Fragment>
  )
}

