// import React from "react"
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import rice from "../../images/rice.png"
import garri from "../../images/garri.jpg"
import beans from "../../images/beans.jpg"
import { ProductContext } from '../../Context/Store/productContext';


const allProducts = {
 default: [
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
  {id: 4,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: beans,
  },
  {id: 5,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: garri,
  },
  {id: 6,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: rice,
  },
  {id: 7,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: rice,
  },
  {id: 8,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: beans,
  },
  {id: 9,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: garri,
  },
  {id: 10,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: rice,
  },
  {id: 11,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: beans,
  },
  {id: 12,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: garri,
  },
  {id: 13,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: rice,
  },
  {id: 14,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: beans,
  },
  {id: 15,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: garri,
  },
  {id: 16,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: rice,
  },
  {id: 17,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: beans,
  },
  {id: 18,
    name: "Rice",
    desc: "Better than Foreing Rice",
    price: "N29, 000",
    image: garri,
  },
],

livestocks: [
  {
    name: "Cockrel",
    desc: "Home trained chicken",
    price: "5,000",
    image: "/assets/chickens.png",
  },
  {
    name: "Broilers",
    desc: "3 months broilers",
    price: "700",
    image: "/assets/broilers.jpg",
  },
  {
    name: "Chicks",
    desc: "Day old chilcks of all sizes",
    price: "20,000",
    image: "/assets/day-old.jpg",
  },
  {
    name: "Cow",
    desc: "Cows are available",
    price: "150,000",
    image: "/assets/cows.png",
  },
  {
    name: "Pigs",
    desc: "Home trained pigs",
    price: "75,000",
    image: "/assets/pigs.jpg",
  },
  {
    name: "Goat",
    desc: "Home trained goats",
    price: "29,000",
    image: "/assets/goat.jpg",
  },
  {
    name: "Turkey<",
    desc: "Turkey birds available",
    price: "15,000",
    image: "/assets/turkey.jpg",
  },
  {
    name: "Eggs",
    desc: "Sets of Eggs available",
    price: "3,000",
    image: "/assets/eggs.jpg",
  },
  {
    name: "Live Fish",
    desc: "Live fresh fish from pond",
    price: "7,000",
    image: "/assets/fish.jpg",
  },
]
}

 const Items= ({ currentItems, title }) =>{


  return(
    <section>
      <div className="containers-product" >
  <h2>{title || 'Products'}</h2>
  <div className="container-card">

  {currentItems.length > 0? 
        currentItems.map((data , idx)=>{
          return (
               <div className="card">
            <div className="bag">
            <img src={data.image} alt ="" />
          </div>
          <div className="price">
            <h3>{data.name}</h3>
            <p>{data.desc} </p>
            <span>Seller: Agroease</span>
            <h4>Price:{data.price}
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
    }) : <h6>No products available</h6>
    
  }
  </div>
   
</div>

  </section>
  
  )
}



 function PaginatedItems({ itemsPerPage }) {
  
  const productStore = React.useContext(ProductContext)

  // const [products, setProducts] = useState(allProducts.default)

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   console.log("allProducts[productStore.category]", allProducts[productStore.category]);
  // setProducts(allProducts[productStore.category])
  // }, [productStore.category])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    const products = allProducts[productStore.category || "default"] || []
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, productStore.category]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allProducts[productStore.category || "default"] || [].length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
    
      <Items currentItems={currentItems} title={productStore.category} />
   
      <ReactPaginate className='pages'
        breakLabel="..."
        nextLabel="next >"
        pageClassName="page-item"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    
    </>
      );
    }

    export default PaginatedItems