import React from 'react'
import Thelinechart from './Thelinechart'
import "./Brokerdb.css"
import BrokerDashboardCard from './BrokerDashboardCard'
import BrokerDashWeather from './BrokerDashWeather'



const Brokdbcontent = () => {
  return (
   <React.Fragment>
   

<div className="dash-content ">
<section className='admin_dash_title'>
						<h2>Dashboard</h2>
					</section>
					<section className='admin_dash_summary overview'>
						<section className='today_weather_card_container'>
							<h4>Today</h4>
							<BrokerDashboardCard />
						</section>
						<BrokerDashWeather />
					</section>
       
       
       
       
       
       
        <div className=" pt-6 flex">
           
           
        </div>

        <div className="activity">
            <Thelinechart/>
        </div> 
     
     </div>


   </React.Fragment>
  )
}

export default Brokdbcontent;
