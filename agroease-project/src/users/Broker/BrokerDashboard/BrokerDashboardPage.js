import React from 'react'
import BrokerDashnav from '../../../components/dashboard-nav-and-side/BrokerDashnav'
import BrokerSidebar from '../../../components/dashboard-nav-and-side/BrokerSidebar'
import BuyerSidebar from '../../../components/dashboard-nav-and-side/BuyerSidebar'
import AdminBrokerTable from '../../../components/TableBio/AdminBrokerTable/AdminBrokerTableCompo/AdminBrokerTable'
import Brokdbcontent from './Brokdbcontent.jsx'



const BrokerDashboardPage =() => {
  return (
    <React.Fragment>
       
       <BuyerSidebar />
       <BrokerDashnav/>
			<div>
				<section className='buyer_dashboard_wrapper'>
					<section className='buyer_dash_title'>
						<h2>Dashboard</h2>
					</section>

					<Brokdbcontent />
          <AdminBrokerTable />
				</section>
			</div>
          
    </React.Fragment>
  )
}

export default BrokerDashboardPage;

