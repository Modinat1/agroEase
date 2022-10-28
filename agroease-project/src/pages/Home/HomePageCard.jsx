import React from "react"

import rice from "../../images/rice.png"
import garri from "../../images/garri.jpg"
import beans from "../../images/beans.jpg"

export const HomePageCard = () =>{
  return(
    <section>
        <div className="card-title">
        <h3>Products</h3>
    <div className="buyer-product-card-container">
 
  <div className="Buyers-product-card-container">
    <div className="buyer-product-card">
      <div className="buyer-image-line">
     {/* for image */} 
        <div className="buyer-product-image">
        <img src={beans}alt="beans" /> 
        </div>
     {/* image ends */} 
        <p>Price: N29, 000</p>
      </div>
      <div className="buyer-product-card-info">
        <div className="card-info">
          <h2>Rice</h2>
          <p>Better than Foreing Rice</p>
          <p>Seller: AgroEase</p>
        </div>
         {/* Carte and button comes in here  */}
        <div className="cart-and-button">
          <div className="buyer-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
.49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
1 0 0 1 0-2z" />
            </svg>
          </div>
          <div className="buyer-product-button">
            <span className="buy-product">Buy Now</span>
          </div>
        </div>
      </div>
    </div>
   {/* CARD TWO */} 
    <div className="buyer-product-card">
      <div className="buyer-image-line">
 {/* for image */}
        <div className="buyer-product-image">
          <img src={rice} alt="beans" />
        </div>
    {/* image ends */} 
        <p>Price: N29, 000</p>
      </div>
      <div className="buyer-product-card-info">
        <div className="card-info">
          <h2>Rice</h2>
          <p>Better than Foreing Rice</p>
          <p>Seller: AgroEase</p>
        </div>
     {/* Carte and button comes in here */}
        <div className="cart-and-button">
          <div className="buyer-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
.49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
1 0 0 1 0-2z" />
            </svg>
          </div>
          <div className="buyer-product-button">
            <span className="buy-product">Buy Now</span>
          </div>
        </div>
      </div>
    </div>
{/* CARD THREE */} 
    <div className="buyer-product-card">
      <div className="buyer-image-line">
    {/* for image */} 
        <div className="buyer-product-image">
          <img src={garri} alt="beans" />
        </div>
        {/* image ends */} 
        <p>Price: N29, 000</p>
      </div>
      <div className="buyer-product-card-info">
        <div className="card-info">
          <h2>Rice</h2>
          <p>Better than Foreing Rice</p>
          <p>Seller: AgroEase</p>
        </div>
        {/* Carte and button comes in here */} 
        <div className="cart-and-button">
          <div className="buyer-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
.49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
1 0 0 1 0-2z" />
            </svg>
          </div>
          <div className="buyer-product-button">
            <span className="buy-product">Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>  

  </section>
  
  )
}