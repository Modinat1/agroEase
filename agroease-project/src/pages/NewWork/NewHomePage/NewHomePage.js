import React from 'react'
import Navbar1 from '../../../components/Navbar1/Navbar1'
import HeadphoneSection from '../HeadphoneSection/HeadphoneSection'
import NewHeroSection from '../NewHeroSection/NewHeroSection'
import NewStoreSection from '../NewStoreSection/NewStoreSection'

const NewHomePage = () => {
  return (
    <div>
        <Navbar1 />
        <hr />
        <HeadphoneSection />
        <NewHeroSection />
        <NewStoreSection />
        {/* <NewPaymentSection /> */}
        {/* <NewCategorySection /> */}
    </div>
  )
}

export default NewHomePage