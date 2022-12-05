import React from 'react'
import NewAdminSidebar from '../../../components/dashboard-nav-and-side/AdminSidebar'
import NewBrokerNavbar from '../../../components/dashboard-nav-and-side/NewBrokerNavbar'
import AdminFarmerTable from '../../../components/TableBio/AdminFarmerTable/AdminFarmerTable'
import AdminFarmerHeroPage from './AdminFarmerCompo/AdminFarmerHeroPage'


const AdminFarmerPage = () => {
  return (
    <div>
        <NewAdminSidebar />
        <NewBrokerNavbar />
        <AdminFarmerHeroPage />
        
    </div>
  )
}

export default AdminFarmerPage