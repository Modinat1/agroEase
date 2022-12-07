import React from 'react'
import Thebarchart from './Thebarchart'
import Thepiechart from './Thepiechart'
import "../../Broker/BrokerDashboard/Brokerdb.css"
import React, { useEffect, useState } from "react";
import axios from "axios";

const Farmercontent=()=> {

        const [lat, setLat] = useState([]);
        const [long, setLong] = useState([]);
        const [data, setData] = useState([]);
        // const [mainTemp, setMainTemp] = useState([]);
        const [iconID, setIconID] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
              navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });
        
              axios
                .get(
                  ` https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=d065cebed8aca1c38e488d38fece74f4`
                )
                .then((response) => {
                  console.log(response.data);
                  setIconID(response.data.weather[0].icon);
                  setData(response.data);
                //   setMainTemp(Math.round(parseFloat(response.data - 273.15)));
                });
            };
            fetchData();
          }, [lat, long]);

  return (
    <React.Fragment>

       
<div className="dash-content">
            {/* <div className="overview">
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
                       <div className="weather-name"> Weather Report APP </div>
                       <div className="weather-image" > 
                           {/* <div className="weather-cycle"></div> 
                           <span></span>
                       </div>

                       <div className="weather-rate">
                           <span className="weather-text">Today:</span> <span class="weather-num">{data.main.temp}°C</span>
                       </div>
                   </div>

                </div>
           </div>  
*/}
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
