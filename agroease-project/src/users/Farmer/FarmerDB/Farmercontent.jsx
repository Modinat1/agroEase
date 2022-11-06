import React from 'react'
import Thebarchart from './Thebarchart'
import Thepiechart from './Thepiechart'
import "../../Broker/BrokerDashboard/Brokerdb.css"

export default function Farmercontent() {
  return (
    <React.Fragment>

       
<div className="dash-content">
            <div className="overview">
               <div className="title">
                   
                   <div className="text">Dashboard</div> 
                   
                   <div className="text">Today</div>
               </div>

               <div className="boxes">
                   <div className="box box1">
                      
                       <div className="box-content">
                        <div className="">Total Clients</div>
                        <br/>
                       <div className="number">50,120</div>
                       </div>
                   </div>

                   <div className="box box2">
                    <div className="box-content">
                        <div className="">Sold Product</div>
                        <br/>
                       <div className="number">50,120</div>
                       </div>
                   </div>

                   <div className="box box2">
                       <div className="box-content">
                           <div className="">Cancelled</div>
                            <br/>
                          <div className="number">50,120</div>
                       </div>
                 </div>

                  <div className="box box2">
                     
                       <div className="box-content">
                           <div className="">Pending</div>
                           <br/>
                           <div className="number">50,120</div>
                       </div>
                  </div>

                   <div className="box box3">
                       <div className="weather-name"> Weather Report</div>
                       <div className="weather-image" > 
                           <div className="weather-cycle"></div>
                           <span><img src='#'/></span>
                       </div>

                       <div className="weather-rate">
                           <span className="weather-text">Today:</span> <span class="weather-num">29</span>
                       </div>
                   </div>

                </div>
           </div> 

           <div className="activity">


                 <div className='mypiechart'>
                 <Thepiechart/>
                 </div>

                  <Thebarchart/>
                  
           </div>  
       </div>

    </React.Fragment>
  )
}
