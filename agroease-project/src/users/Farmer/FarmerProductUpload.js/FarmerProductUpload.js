import { Link } from "react-router-dom";
import React, { useState } from 'react';
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./FarmerProductUpload.css";

// const submitHandler = (event) => {
// 	event.preventDefault();
// 	const {
// 		product_name,
// 		product_type,
// 		unit_input,
// 		unit_cost,
// 		product_desc,
// 		product_file,
// 	} = event.target.elements;
// 	const formValue = {
// 		product_name: product_name.value,
// 		product_type: product_type.value,
// 		unit_input: unit_input.value,
// 		unit_cost: unit_cost.value,
// 		product_desc: product_desc.value,
// 		product_file: product_file?.files?.[0].name,
// 	};

// 	console.table(formValue);
// 	event.target.reset();
// 	// displayProductUploadNotice
// };



export const FarmerProductUpload = (props, func={addRows}) => {
	// function displayProductUploadNotice() {
	// 	toast.error("Product uploaded successfully");
	// }


	const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
	const [unitInput, setUnitInput] = useState('');
	const [unitCost, setUnitCost] = useState('');
	const [productDesc, setProductDesc] = useState('');
	const [productFile, setProductFile] = useState('');

	
  
  const changeProductName = (event) => {
    setProductName(event.target.value);
  };
	const changeProductType = (event) => {
    setProductType(event.target.value);
  };
	const changeUnitInput = (event) => {
    setUnitInput(event.target.value);
  };
	const changeUnitCost = (event) => {
    setUnitCost(event.target.value);
  };
	const changeProductDesc = (event) => {
    setProductDesc(event.target.value);
  };
  
  const changeProductFile = (event) => {
    setProductFile(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val= {
					productName,
					productType,
					unitInput,
					unitCost,
					productDesc,
					productFile
				}
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
		setProductName('');
		setProductType('');
		setUnitInput('');
		setUnitCost('');
		setProductDesc('');
		setProductFile('');
    
  };

	return (
		<>
			{/* <ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/> */}
			<section className='farmers-product'>
				<h5 className='farmers-product-title'>New Product</h5>
				<form method='post'>
					<div className='product-name-type'>
						<div className='product-name label_input'>
							<label htmlFor='product-name' className='name'>
								Name of Product
							</label>
							<input
								type='text'
								className='product'
								id='product-name'
								value={productName}
								onChange={changeProductName}
							/>
						</div>
						<div className='product-type label_input'>
							<label htmlFor='product-input' className='name'>
								Type of Product
							</label>
							<input
								type='text'
								className='product-type-input'
								id='product-input'
								value={productType}
								onChange={changeProductType}
							/>
						</div>
					</div>
					<div className='default-unit-cost'>
						<div className='default-unit-div label_input'>
							<label htmlFor='unit-input' className='name'>
								Default Unit
							</label>
							<input
								type='text'
								className='default-unit-input'
								value={unitInput}
								onChange={changeUnitInput}
							/>
						</div>
						<div className='unit-cost label_input'>
							<label htmlFor='unit-cost' className='name'>
								Unit Cost/item
							</label>
							<input
								type='text'
								id='unit-cost'
								className='unit-cost-type'
								value={unitCost}
								onChange={changeUnitCost}
							/>
						</div>
					</div>
					<div className='textarea-text label_input'>
						<label htmlFor='product-desc' className='name'>
							Product Description
						</label>
						<textarea
							id='product-desc'
							cols={30}
							rows={10}
							placeholder='product description'
							value={productDesc}
							onChange={changeProductDesc}
						/>
					</div>
					<div className='upload-file'>
						<label htmlFor='choose-file' className='name'>
							Upload Photo
						</label>
						<div className='choose-file' id='choose-file'>
							<input
								type='file'
								placeholder='Choose file'
								name='product_file[]'
								multiple='multiple'
								value={productFile}
								onChange={changeProductFile}
							/>
						</div>
					</div>
					<div className='add-product-btn'>
						<Link to='/farmerproductpage'><button type='submit' onClick={transferValue}>Add Product</button></Link>
					</div>
				</form>
			</section>
		</>
	);
};
