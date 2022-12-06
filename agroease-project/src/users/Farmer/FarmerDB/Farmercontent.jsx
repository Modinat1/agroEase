import React from 'react'
import Thebarchart from './Thebarchart'
import Thepiechart from './Thepiechart'
import "../../Broker/BrokerDashboard/Brokerdb.css"

const Farmercontent=()=> {
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
                        <div className="card-text">Total Clients</div>
                        <br/>
                       <div className="number">50,120</div>
                       </div>
                   </div>

                   <div className="box box2">
                    <div className="box-content">
                        <div className="card-text">Sold Product</div>
                        <br/>
                       <div className="number">50,120</div>
                       </div>
                   </div>

                   <div className="box box2">
                       <div className="box-content">
                           <div className="card-text">Cancelled</div>
                            <br/>
                          <div className="number">50,120</div>
                       </div>
                 </div>

                  <div className="box box2">
                     
                       <div className="box-content">
                           <div className="card-text">Pending</div>
                           <br/>
                           <div className="number">50,120</div>
                       </div>
                  </div>

                   <div className="box box3">
                       <div className="weather-name"> Weather Report APP</div>
                       <div className="weather-image" > 
                           <div className="weather-cycle"></div>
                           <span></span>
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

export default Farmercontent;
