import React from "react";
import nneoma from '../../images/nneoma.png'
import confidence from '../../images/confidence.jpeg'
import ebuka from '../../images/ebuka.png'
import modinat from '../../images/modinat.png'
import emeka from '../../images/emeka.png'
import tola from '../../images/tola.png'
import susan from '../../images/susan.png'
import godswill from '../../images/godswill.png'
import gbenga from '../../images/gbenga.png'
import cynthia from '../../images/cynthia.png'

// import Navbar from "../../Navbar";
import "./About.css"

const Aboutus = () => {
	return (
		<>
		<main id="the-main ">
       
	   <div>
    
        <div className="container mx-auto">
            <div>
                <div className="searchresults ">
                    <ul id ="searchlist">
            
                    </ul>
                  </div>
                <h3 className="about-h3">About Us</h3>

                <div>
                   
                    <p>Agroease is an online agricultural store and marketplace htmlFor farm input, agricultural equipments, agro processed products etc. you can conveniently and safely shop high quality, fresh and organic agricultural commodities and safely receive your order at your location. On agroease getting value for your money is guaranteed.
                        You can book product ahead of time, both on large and small quantities. Get freshly harvested products direct from the farm all at very affordable rate.
                        As an online market place of agricultural product we are entirely committed to providing high quality products, excellent <br/> customer experience and safe transactions to agro-traders, consumers, agro-industries and all agro-users. 
                        We supply in tonnages and large quantities to exporters of any demanded agro commodities and respond swiftly to bulk orders.
                        </p>
                </div> 
            </div>
            <div className="mission-and-vision">
                <div>
                    <h3 className="about-h3">Our Mission</h3>
                    <div>
                        <p>Our vision is to consistently provide an online platform where 
                            buyers and seller of agro products can seamlessly transact,
                             without fear of loss, shortage or exploitation. 
                             Expand use and youth involvement in agriculture in Nigeria
                            and beyond through the use technology and industrialized structures.</p>
                    </div>
                </div>
                <div>
                    <h3 className="about-h3">Our Vision</h3>
                    <div>
                        <p>Bridge the trust gap between buyers and sellers of agro products in the online space.
                        Provide 360 degree information, News and Education to agro stakeholders.
                        Develop and provide earning opportunities through the agroease structure.</p>
                    </div>
                </div>
            </div>
           
        </div>
        <div>
            <div>
                <h3 className="about-h3" >Meet the Team</h3>
                <div>
                    <div className="faculties">
                        <div className="unit">
                            <div>
                                <img src={nneoma} alt="Oma"/>
                            </div>
                            <p>Oma Raymond</p>
                        </div>
                        <div className="unit">
                            <div>
                                <img src={confidence} alt=" Confidence"/>
                            </div>
                            <p>Chidi Confidence</p>
                        </div>
                        <div className="unit">
                            <div>
                                <img src={ebuka} alt="Ebuka"/>
                            </div>
                            <p>Nwoporo Chukwuebuka</p>
                        </div>
                        <div className="unit">
                            <div>
                                <img src={modinat} alt="Modinat"/>
                            </div>
                            <p>Modinat Adenike</p>
                        </div>
                    </div>
                    <div className = "faculties">
                        <div className="unit">
                            <div>
                                <img src={emeka} alt="Emeka"/>
                            </div>
                            <p>Odezulu Chukuemeka</p>
                        </div>
                        <div className="unit">
                            <div>
                                <img src={tola} alt="Tola"/>
                            </div>
                            <p>Adetola Adeyeye</p>
                        </div>
                        <div className= "unit">
                            <div>
                                <img src={susan} alt="Susan"/>
                            </div>
                            <p>Odii Susan</p>
                        </div>
                    </div>
                    <div  className = "faculties">
                        <div className= "unit">
                            <div>
                                <img src={godswill} alt="Godswill"/>
                            </div>
                            <p>Godswill Chibuzo</p>
                        </div>
                        <div className= "unit">
                            <div>
                                <img src={gbenga} alt="Gbenga"/>
                            </div>
                            <p> Akinukawe Gbenga</p>
                        </div>
                    </div>
                    <div  className = "faculties">
                        <div className= "unit">
                            <div>
                                <img src={cynthia} alt="Cynthia"/>
                            </div>
                            <p>Nwankwo Cynthia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main> 
  
  </>
	)

};

export default Aboutus;
