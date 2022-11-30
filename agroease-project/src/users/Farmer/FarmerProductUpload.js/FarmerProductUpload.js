// import { Link } from "react-router-dom";
// import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./FarmerProductUpload.css";

// const submitHandler = (event) => {
// 	event.preventDefault();
// 	const {
// 		name,
// 		product_type,
// 		unit_input,
// 		cost,
// 		description,
// 		product_file,
// 	} = event.target.elements;
// 	const formValue = {
// 		product_name: product_name.value,
// 		product_type: product_type.value,
// 		unit_input: unit_input.value,
// 		cost: cost.value,
// 		product_desc: product_desc.value,
// 		product_file: product_file?.files?.[0].name,
// 	};

// 	console.table(formValue);
// 	event.target.reset();
// 	// displayProductUploadNotice
// };

export const FarmerProductUpload = (props) => {
  
  const initialValues = {

  //   {
  //     "name": "beans",
  //     "description": "Iron beans",
  //     "quantity": 8,
  //     "cost": 596,
  //     "price": 500000,
  //     "actualPrice": 45000000,
  //     "CategoryName":"plant"
      
      
  // }


    name: "",
    description: "",
    quantity: "",
    price: 596,
    cost: "",
    actualPrice: 45000000,
    CategoryName: "",
    // unit_input: "",
    // file: [],
  };

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

  const validationSchema = Yup.object({
    name: Yup.string().required("product name required").max(50),
    description: Yup.string().required("Product description required").max(200),
    quantity: Yup.string().required("The quantity must not be zero").max(2),
    // file: Yup.mixed()
    //   .required("This picture is required")
  //     .test({message: "Uploaded file is too big",
        
  //     test:(value) => value[0].size <= 2000000
  //       // { return console.log(value) }
  //       // !value || (value && value.size <= 1024 * 1024)
  // })
      // .test(
      //   "FILE_FORMAT",
      //   "Uploaded file has unsupported format",
      //   (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      // ),
   });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
     
      <section className="farmers-product">
        <h5 className="farmers-product-title">New Product</h5>
        <form action="" method="post" onSubmit={formik.handleSubmit}>
          <div className="product-name-type">
            <div className="product-name label_input">
              <label htmlFor="product-name" className="name">
                Name of Product
              </label>
              <input
                type="text"
                className="product"
                placeholder="name of product"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className="product_upload_error">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            

            <div className="product-type label_input">
              <label htmlFor="CategoryName" className="name">
                Type of Product
              </label>
              <select 
							name="CategoryName" 
							id="CategoryName"
							onChange={formik.handleChange}
              value={formik.values.CategoryName}
              className="lopo"
							>
                select
                <option value="" disabled>
                  Select
                </option>
                <option value="uploaded_farm_input">Farm Input</option>
                <option value="uploaded_crop">Crop</option>
                <option value="uploaded_poultry">Poultry</option>
                <option value="uploaded_livestock">LiveStock</option>
                <option value="uploaded_farmer_quipment">Farm Equipment</option>
              </select>
            </div>
          </div>

					<div className="default-unit-cost">
            {/* <div className="default-unit-div label_input">
              <label htmlFor="unit_input" className="name">
                Default Unit
              </label>

              <select 
							id="unit_input" 
							name="unit_input" 
							onChange={formik.handleChange}
              value={formik.values.unit_input}
							>
                <option value="" disabled>
                  Select
                </option>
                <option value="uploaded_kilo">Kg</option>
                <option value="uploaded_tons">tons</option>
                <option value="uploaded_crate">crates</option>
                <option value="uploaded_bags">Bag</option>
                <option value="uploaded_basket">Basket</option>
                <option value="uploaded_unit">Unit</option>
              </select>

             
            </div> */}
            <div className="unit-cost label_input">
              <label htmlFor="unit-cost" className="name">
                Unit Cost of item (₦)
              </label>
              <input
                type="text"
                className="unit-cost-type"
								placeholder="0"
								name="cost" 
								id="cost"
								onChange={formik.handleChange}
								value={formik.values.cost}
               
              />
            </div>
          </div>

					<div className="default-unit-cost upload_photo_qty">
            {/* <div className="default-unit-div label_input">
              <label htmlFor="unit-input upload_photo" className="name">
							Upload Photo
              </label>

              <input
                type="file" 
								className="choose_file"
								id="file"
								name="file"
								onChange={formik.handleChange}
								value={formik.values.file}
                multiple
                required
								/>
								 {formik.errors.file ? <div className="product_upload_error">{formik.errors.file}</div> : null}
            </div> */}
            <div className="unit-cost label_input">
              <label htmlFor="unit-cost" className="name">
                Quantity of Item
              </label>
              <input
                type="number"
								placeholder="0"
								id="quantity"
								name="quantity"
								onChange={formik.handleChange}
								value={formik.values.quantity}
							/>
							 {formik.errors.quantity ? <div className="product_upload_error">{formik.errors.quantity}</div> : null}
            </div>
          </div>

          <div className="textarea-text label_input">
            <label htmlFor="product-desc" className="name">
              Product Description
            </label>
            <textarea
              // id="product-desc"
              cols={30}
              rows={10}
              placeholder="product description"
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
						{formik.errors.description ? (
                <div className="product_upload_error">
                  {formik.errors.description}
                </div>
              ) : null}
          </div>
          

          <div className="add-product-btn">
            {/* <Link to="/farmerproductpage"> */}
              <button 
							type="submit" 
							// onClick={transferValue}
							>
                Add Product
              </button>
            {/* </Link> */}
          </div>
        </form>
      </section>
    </>
  );
};
