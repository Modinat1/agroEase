import React from 'react';
import "./BuyerDashCard.css";
import WeatherImg from "../../../images/farmer_img_circle.png";
import CloudImg from "../../../images/farmer_cloud_img.png";

export const BuyerDashCard = () => {
  return (
    <div>
      <section className="buyer_dash_summary">
      <section className="today_weather_card_container">
        <h4>Today</h4>
        <div className="buyer_summary_card_wrapper">
          {/* card 1 */}
          <div className="buyer_dash_category_card buyer_active farmer_buyer_card-1">
            <p className="farmer_buyer_title">Total Product</p>
            <p className="farmer_buyer_price">600</p>
          </div>
          {/* card 2 */}
          <div className="buyer_dash_category_card farmer_buyer_card-2">
            <p className="farmer_buyer_title">Sold Product</p>
            <p className="farmer_buyer_price">260</p>
          </div>
          {/* card 3 */}
          <div className="buyer_dash_category_card farmer_buyer_card-3">
            <p className="farmer_buyer_title">Total revenue</p>
            <p className="farmer_buyer_price">0.00</p>
          </div>
        </div>
      </section>
      {/* buyer Weather Container */}
      <section className="buyer_weather_container">
        <p className="weather_report">Weather Report</p>
        <div className="weather_img">
          <img
            src={WeatherImg}
            alt="weather img"
            id="weather_circle"
          />
          <img
            src={CloudImg}
            alt="cloud icon"
            id="weather_cloud_icon"
          />
        </div>
        <p>
          Today:
          <span>
            29 <sup> ℃ </sup>
          </span>
        </p>
      </section>
    </section>
    </div>
  )
}
