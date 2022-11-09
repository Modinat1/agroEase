// import React from "react"
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import rice from "../../images/rice.png";
import garri from "../../images/garri.jpg";
import beans from "../../images/beans.jpg";

const items = [
	{
		id: 1,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: beans,
	},
	{
		id: 2,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: garri,
	},
	{
		id: 3,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: rice,
	},
	{
		id: 4,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: beans,
	},
	{
		id: 5,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: garri,
	},
	{
		id: 6,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: rice,
	},
	{
		id: 7,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: rice,
	},
	{
		id: 8,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: beans,
	},
	{
		id: 9,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: garri,
	},
	{
		id: 10,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: rice,
	},
	{
		id: 11,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: beans,
	},
	{
		id: 12,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: garri,
	},
	{
		id: 13,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: rice,
	},
	{
		id: 14,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: beans,
	},
	{
		id: 15,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: garri,
	},
	{
		id: 16,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: rice,
	},
	{
		id: 17,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: beans,
	},
	{
		id: 18,
		name: "Rice",
		desc: "Better than Foreing Rice",
		price: "N29, 000",
		image: garri,
	},
];

const Items = ({ currentItems }) => {
	return (
		<section>
			<div className='card-title'>
				<h3>Products</h3>
				<div className='buyer-product-card-container'>
					<div className='Buyers-product-card-container'>
						{currentItems &&
							currentItems.map((data, idx) => {
								return (
									<div className='buyer-product-card'>
										<div className='buyer-image-line'>
											{/* for image */}
											<div className='buyer-product-image'>
												<img src={data.image} alt='beans' />
											</div>
											{/* image ends */}
											<div className='card-info'>
												<p>{data.name}</p>
												<p>{data.desc}</p>
												<p>Seller: AgroEase</p>
											</div>
										</div>

										<div className='buyer-product-card-info'>
											{/* Carte and button comes in here  */}
											<p>Price:{data.price}</p>
											<div className='homepage-cart-and-button'>
												<div className='buyer-cart'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width={16}
														height={16}
														fill='currentColor'
														className='bi bi-cart3'
														viewBox='0 0 16 16'>
														<path
															d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 
                                0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
                                .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415
                                11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01
                                3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
                                9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2
                                2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
                                1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1
                                1 0 0 1 0-2z'
														/>
													</svg>
												</div>
												<div className='buyer-product-button'>
													<span className='buy-product'>Buy Now</span>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
};

 
  return(
    <section>
      <div className="containers">
        <h2>products</h2>
        <div className="container-card">
  {currentItems && 
        currentItems.map((data , idx)=>{
      
  return ( <div className="card">
    <div className="bag">
      <img src={data.image} alt />
      <div className='egoPrice'>
        <h4>Price: {data.price}</h4>
      </div>
    </div>
    <div className="price">
      <h3>{data.name}</h3>
      <p>{data.desc}</p>
      <span>Seller: Agroease</span>
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


	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<>
			<Items currentItems={currentItems} />

			<ReactPaginate
				className='pages'
				breakLabel='...'
				nextLabel='next >'
				pageClassName='page-item'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</>
	);
}


 function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
   
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
=======
