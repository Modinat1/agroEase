import React from 'react'
import Thelinechart from './Thelinechart'
import "./Brokerdb.css"



const Brokdbcontent = () => {
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
                         <span></span>
                     </div>

                     <div className="weather-rate">
                         <span className="weather-text">Today:</span> <span class="weather-num">29</span>
                     </div>
                 </div>

              </div>
         </div> 

         <div className="activity">


            <Thelinechart/>

                
         </div>  
     </div>


   </React.Fragment>
  )
}

export default Brokdbcontent;
