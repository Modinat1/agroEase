import React from "react";
import './CurrentTaskMainCard.css';
import FulaniBreed from "../../../images/fulani_breed.svg";

export const CurrentTaskMainCard = () => {
  return (
    <>
      <section className="farmer_task_main_card">
        <div className="main_card_img">
          <img
            src={FulaniBreed}
            alt="fulani breed"
            id="fulani_breed"
          />
        </div>
        <div className="main_card_content">
          <h5>Fulani Breed</h5>
          <p>Pig</p>
          <p>
            Available <span>✔</span>
          </p>
          <div className="product_desc_content">
            <h6 className="product_desc_content_title">Description:</h6>
            <h6 className="product_desc_content_amount">
              Fulani chicken Special Breed is a type of chicken that is
              processed in the far north
            </h6>
          </div>
          <div className="product_desc_content">
            <h6 className="product_desc_content_title">Amount:</h6>
            <h6 className="product_desc_content_amount" id="product_amount">
              #120,000.00
            </h6>
          </div>
        </div>
      </section>
    </>
  );
};
