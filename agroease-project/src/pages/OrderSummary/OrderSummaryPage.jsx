import './OrderSummaryPage.css'

import React from 'react'

const OrderSummaryPage = () => {
  return (
    <section className="general-container">
      <div className="summary-order-left">
        <h2 className="order-summery-top-pick"> Top Picks</h2>
        <div className="summery-box1">
          <div>
            <img src="summaryChiken1.png" alt="summeryChiken-image" />
          </div>
          <div className="summary-image-details">
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="sumary-0rder-money"> N120,000.00</h5>
          </div>
        </div>
        {/* 2 */}
        <div className="summery-box1">
          <div>
            <img src="summaryChiken1.png" alt="summeryChiken-image" />
          </div>
          <div className="summary-image-details">
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="sumary-0rder-money"> N120,000.00</h5>
          </div>
        </div>
        {/* 3 */}
        <div className="summery-box1">
          <div>
            <img src="summaryChiken1.png" alt="summeryChiken-image" />
          </div>
          <div className="summary-image-details">
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="sumary-0rder-money"> N120,000.00</h5>
          </div>
        </div>
        {/* 4 */}
        <div className="summery-box1">
          <div>
            <img src="summaryChiken1.png" alt="summeryChiken-image" />
          </div>
          <div className="summary-image-details">
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="sumary-0rder-money"> N120,000.00</h5>
          </div>
        </div>
        {/* 5 */}
        <div className="summery-box1">
          <div>
            <img src="summaryChiken1.png" alt="summeryChiken-image" />
          </div>
          <div className="summary-image-details">
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="summery-details1"> Fulani Cow</h5>
            <h5 className="sumary-0rder-money"> N120,000.00</h5>
          </div>
        </div>
      </div>
      <div className="summary-order-right">
        <h2 className="summary-order-right-header">Summary Order</h2>
        {/*  box two section */}
        <div className="summarry-order-box2-biggestContainer">
          {/* <div class="summary-order-box2-biggestContainerInner"></div> */}
          <div className="summary-order-box-2">
            <div className="summary-empty">
              <img src="summaryChikenRectangle.png" />
            </div>
            <div className="summary-order-total">
              <h5>Fulani Cow Special Breed</h5>
              <h5 className="sumary-0rder-money"> N120,000.00 </h5>
            </div>
            <div className="summary-order-cancel"> ✖</div>
          </div>
          {/* 2 */}
          <div className="summary-order-box-2">
            <div className="summary-empty">
              <img src="summaryChikenRectangle.png" />
            </div>
            <div className="summary-order-total">
              <h5>Fulani Cow Special Breed</h5>
              <h5 className="sumary-0rder-money"> N120,000.00 </h5>
            </div>
            <div className="summary-order-cancel"> ✖</div>
          </div>
          {/* 3 */}
          <div className="summary-order-box-2">
            <div className="summary-empty">
              <img src="summaryChikenRectangle.png" />
            </div>
            <div className="summary-order-total">
              <h5>Fulani Cow Special Breed</h5>
              <h5 className="sumary-0rder-money"> N120,000.00 </h5>
            </div>
            <div className="summary-order-cancel"> ✖</div>
          </div>
        </div>
        <section className="summary-order-button-container">
          <button className="summary-order-checkout">
            {' '}
            Proceed to checkout
          </button>
        </section>
        <section className="summery-order-total-vat">
          <div className="subtotal-vat-shipping-summary-left">
            <h4>Subtotal</h4>
            <h4>VAT</h4>
            <h4>Shipping</h4>
            <h4>Total</h4>
          </div>
          <div className=" ">
            <h4>N173,000.00</h4>
            <h4>N400.00</h4>
            <h4>N0.00</h4>
            <h4>N173,400.00</h4>
          </div>
        </section>
      </div>
    </section>
  )
}

export default OrderSummaryPage
