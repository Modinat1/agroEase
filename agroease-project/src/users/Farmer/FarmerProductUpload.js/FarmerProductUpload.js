import React from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./FarmerProductUpload.css";

const submitHandler = (event) => {
	event.preventDefault();
	const {
		product_name,
		product_type,
		unit_input,
		unit_cost,
		product_desc,
		product_file,
	} = event.target.elements;
	const formValue = {
		product_name: product_name.value,
		product_type: product_type.value,
		unit_input: unit_input.value,
		unit_cost: unit_cost.value,
		product_desc: product_desc.value,
		product_file: product_file?.files?.[0].name,
	};

	console.table(formValue);
	event.target.reset();
	// displayProductUploadNotice
};
export const FarmerProductUpload = () => {
	// function displayProductUploadNotice() {
	// 	toast.error("Product uploaded successfully");
	// }
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
				<form method='post' onSubmit={submitHandler}>
					<div className='product-name-type'>
						<div className='product-name label_input'>
							<label htmlFor='product-name' className='name'>
								Name of Product
							</label>
							<input
								type='text'
								className='product'
								id='product-name'
								name='product_name'
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
								name='product_type'
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
								id='unit-input'
								name='unit_input'
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
								name='unit_cost'
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
							name='product_desc'
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
							/>
						</div>
					</div>
					<div className='add-product-btn'>
						<button type='submit'>Add Product</button>
					</div>
				</form>
			</section>
		</>
	);
};
