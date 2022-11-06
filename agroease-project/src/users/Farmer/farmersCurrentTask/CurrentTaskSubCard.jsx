import React from 'react'
import './CurrentTaskSubCard.css';
import FulaniRice from "../../../images/rice_uploaded.svg"


export const CurrentTaskSubCard = () => {
  return (
    <>
      <section className="farmer_current_tasK_sub_card_wrapper">
          {/* Task Sub Card 1*/}
          <div className="farmer_current_task_sub_card">
            <div className="item_details">
              <div>
                <img src={FulaniRice} alt="Fulani rice" id="fulani_rice" />
              </div>
              <div className="item_details_name">
                <h5>Rice</h5>
                <p>Better than foreign rice</p>
                <p><span>Seller:</span> <span>AgroEase</span></p>
              </div>
            </div>
            <div className="uploaded_cart_details">
              <div className="uploaded_cart_price">
                <p>Price: #29000</p>
              </div>
              <div className="uploaded_cart_buttons">
                <button className="farmer_shopping_cart"><i className="fas fa-shopping-cart" /></button>
                <button className="farmer_buy_now">buy now</button>
              </div>
            </div>
          </div>
          {/* Task Sub Card 1*/}
          <div className="farmer_current_task_sub_card">
            <div className="item_details">
              <div className="fulani_rice_div">
                <img src={FulaniRice} alt="Fulani rice" id="fulani_rice" />
              </div>
              <div className="item_details_name">
                <h5>Rice</h5>
                <p>Better than foreign rice</p>
                <p><span>Seller:</span> <span>AgroEase</span></p>
              </div>
            </div>
            <div className="uploaded_cart_details">
              <div className="uploaded_cart_price">
                <p>Price: #29000</p>
              </div>
              <div className="uploaded_cart_buttons">
                <button className="farmer_shopping_cart"><i className="fas fa-shopping-cart" /></button>
                <button className="farmer_buy_now">buy now</button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
