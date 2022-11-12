import React from 'react'

const BrokerDashboardCard = () => {
  return (
    <div>
      <div className="admin_summary_card_wrapper">
        {/* card 1 */}
        <div className="farmer_product_category_card admin_active farmer_admin_card-1">
          <p className="farmer_admin_title">Total Product</p>
          <p className="farmer_admin_price">600</p>
        </div>
        {/* card 2 */}
        <div className="farmer_product_category_card farmer_admin_card-2">
          <p className="farmer_admin_title">Sold Product</p>
          <p className="farmer_admin_price">260</p>
        </div>
        {/* card 3 */}
        <div className="farmer_product_category_card farmer_admin_card-3">
          <p className="farmer_admin_title">Total revenue</p>
          <p className="farmer_admin_price">0.00</p>
        </div>
        {/* card 4 */}
        <div className="farmer_product_category_card farmer_admin_card-4">
          <p className="farmer_admin_title">Pending</p>
          <p className="farmer_admin_price">384</p>
        </div>
      </div>
    </div>
  )
}

export default BrokerDashboardCard