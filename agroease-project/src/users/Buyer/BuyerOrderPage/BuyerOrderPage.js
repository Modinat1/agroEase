import React from 'react'
import NewFarmerSidebar from '../../../components/dashboard-nav-and-side/FarmerSidebar'
import NewBrokerNavbar from '../../../components/dashboard-nav-and-side/NewBrokerNavbar'
import BuyerClientOrderTable from '../../../components/TableBio/BuyerOrderTable/BuyerClientOrderTable'
import BuyerOrderTable from '../../../components/TableBio/BuyerOrderTable/BuyerOrderTable'
import NewStoreSection from '../../../pages/NewWork/NewStoreSection/NewStoreSection'
import { CurrentTaskMainCard } from '../../Farmer/farmersCurrentTask/CurrentTaskMainCard'

const BuyerOrderPage = () => {
  return (
    <div>
        <NewBrokerNavbar />
		<NewFarmerSidebar />
        <section className='buyer_dashboard_wrapper'>
			<section className='buyer_dash_title'>
				<h2 className="pl-5">Products </h2>
			</section>
			<CurrentTaskMainCard />
			<div className='buyer_uploaded_product'>
				<h5 >Current Task</h5>
			</div>
			<NewStoreSection />
            <div>
                <h1>Order History</h1>
                <BuyerClientOrderTable />
            </div>
		</section>

    </div>
  )
}

export default BuyerOrderPage