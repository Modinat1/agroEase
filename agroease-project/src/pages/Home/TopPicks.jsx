import React from "react"
import "./HomePage.css"
import rice from "../../images/rice.png"
import garri from "../../images/garri.jpg"
import beans from "../../images/beans.jpg"

export const TopPicks = () =>{

  const products = [
    {id: 1,
      name: "Rice",
      desc: "Better than Foreing Rice",
      price: "N29, 000",
      image: beans,
    },
    {id: 2,
      name: "Rice",
      desc: "Better than Foreing Rice",
      price: "N29, 000",
      image: garri,
    },
    {id: 3,
      name: "Rice",
      desc: "Better than Foreing Rice",
      price: "N29, 000",
      image: rice,
    },
  
  ]
  return(
    <section>
     <div className="containers-product" >
  <h2>Top Picks</h2>
  <div className="container-card">

  {products.map((data , idx)=>{
          return (
               <div className="card" key={idx}>
            <div className="bag">
            <img src={data.image} alt ="" />
          </div>
          <div className="price">
            <h3>{data.name}</h3>
            <p>{data.desc} </p>
            <span>Seller: Agroease</span>
            <h4>Price:<del>{data.price}</del>
            </h4>
            <div className="share">
              <div className="carte" id="carte">
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
              <div className="by-me">
                <button id="buy">Buy Now</button>
              </div>
              </div>
              </div>
              </div>
    )
    })
    
  }
  </div>
   
</div>

  </section>
  
  )
}