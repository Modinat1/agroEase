import React from 'react'
import BrokerDashnav from '../../../components/dashboard-nav-and-side/BrokerDashnav'
import BrokerSidebar from '../../../components/dashboard-nav-and-side/BrokerSidebar'
import Brokdbcontent from './Brokdbcontent.jsx'



const BrokerDashboardPage =() => {
  return (
    <React.Fragment>
       
       <BrokerSidebar/>
       <BrokerDashnav/>
       <Brokdbcontent />
       
             
    </React.Fragment>
  )
}

export default BrokerDashboardPage;

