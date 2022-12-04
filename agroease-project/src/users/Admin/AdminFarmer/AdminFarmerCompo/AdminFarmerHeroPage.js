import React from 'react'
import AdminBrokerTable from '../../../../components/TableBio/AdminBrokerTable/AdminBrokerTableCompo/AdminBrokerTable'
import AdminFarmerTable from '../../../../components/TableBio/AdminFarmerTable/AdminFarmerTable'
import { FarmerProductCard } from '../../../Farmer/farmerProduct/FarmerProductCard'
import { AdminFarmTaskSwitch } from './AdminFarmTaskSwitch'

const AdminFarmerHeroPage = () => {
  return (
    <section className='farmer_product_wrapper'>
		<div className='farmer_product_title'>
			<h3>Products</h3>
		</div>
		<FarmerProductCard />
		<section className='farmer_add_product'>
            <AdminFarmTaskSwitch />
            <AdminFarmerTable /> 
		</section>
	</section>  
  )
}

export default AdminFarmerHeroPage