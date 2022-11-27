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

export const FarmerProductUpload = (props) => {
  // function displayProductUploadNotice() {
  // 	toast.error("Product uploaded successfully");
  // }

  // const farmerDB = "db101";
  // let todoDBInstance = JSON.parse(localStorage.getItem(farmerDB)) || [];

  // const [productName, setProductName] = useState("");
  // const [productType, setProductType] = useState("");
  // const [unitInput, setUnitInput] = useState("");
  // const [unitCost, setUnitCost] = useState("");
  // const [productDesc, setProductDesc] = useState("");
  // const [productFile, setProductFile] = useState("");

  // const changeProductName = (event) => {
  // 	setProductName(event.target.value);
  // };
  // const changeProductType = (event) => {
  // 	setProductType(event.target.value);
  // };
  // const changeUnitInput = (event) => {
  // 	setUnitInput(event.target.value);
  // };
  // const changeUnitCost = (event) => {
  // 	setUnitCost(event.target.value);
  // };
  // const changeProductDesc = (event) => {
  // 	setProductDesc(event.target.value);
  // };

  // const changeProductFile = (event) => {
  // 	setProductFile(event.target.value);
  // };

  // console.log(changeProductName);

  // const transferValue = (event) => {
  // 	event.preventDefault();
  // 	const val = {
  // 		productName,
  // 		productType,
  // 		unitInput,
  // 		unitCost,
  // 		productDesc,
  // 		productFile,
  // 	};
  // 	const updatedTodo = [...todoDBInstance, val];
  // 	localStorage.setItem(farmerDB, JSON.stringify(updatedTodo));
  // 	props.func(val);
  // 	clearState();
  // };

  // const clearState = () => {
  // 	setProductName("");
  // 	setProductType("");
  // 	setUnitInput("");
  // 	setUnitCost("");
  // 	setProductDesc("");
  // 	setProductFile("");
  // };
  const initialValues = {
    product_name: "",
    product_cart: "",
    unit_input: "",
    unit_cost: "",
    product_desc: "",
    product_qty: "",
    file: "",
  };

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validationSchema = Yup.object({
    product_name: Yup.string().required("product name required").max(50),
    product_desc: Yup.string().required("Product description require").max(200),
    product_qty: Yup.string().required("The quantity must not be zero").max(2),
    file: Yup.mixed()
      .nullable()
      .required("This picture is required")
      .test(
        "FILE_SIZE",
        "Uploaded file is too big",
        (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
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
                id="product_name"
                name="product_name"
                onChange={formik.handleChange}
                value={formik.values.product_name}
              />
              {formik.errors.product_name ? (
                <div className="product_upload_error">
                  {formik.errors.product_name}
                </div>
              ) : null}
            </div>
            

            <div className="product-type label_input">
              <label htmlFor="product_cart" className="name">
                Type of Product
              </label>
              <select 
							name="product_cart" 
							id="product_cart"
							onChange={formik.handleChange}
              value={formik.values.product_cart}
              className="lopo"
							>
                select
                <option value="">
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
            <div className="default-unit-div label_input">
              <label htmlFor="unit_input" className="name">
                Default Unit
              </label>

              <select 
							id="unit_input" 
							name="unit_input" 
							onChange={formik.handleChange}
              value={formik.values.unit_input}
							>
                <option value="">
                  Select
                </option>
                <option value="uploaded_kilo">Kg</option>
                <option value="uploaded_tons">tons</option>
                <option value="uploaded_crate">crates</option>
                <option value="uploaded_bags">Bag</option>
                <option value="uploaded_basket">Basket</option>
                <option value="uploaded_unit">Unit</option>
              </select>

             
            </div>
            <div className="unit-cost label_input">
              <label htmlFor="unit-cost" className="name">
                Unit Cost of item (₦)
              </label>
              <input
                type="text"
                className="unit-cost-type"
								placeholder="0"
								name="unit_cost" 
								id="unit_cost"
								onChange={formik.handleChange}
								value={formik.values.unit_cost}
               
              />
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
              id="product_desc"
              name="product_desc"
              onChange={formik.handleChange}
              value={formik.values.product_desc}
            />
						{formik.errors.product_desc ? (
                <div className="product_upload_error">
                  {formik.errors.product_desc}
                </div>
              ) : null}
          </div>
          

					<div className="default-unit-cost upload_photo_qty">
            <div className="default-unit-div label_input">
              <label htmlFor="unit-input upload_photo" className="name">
							Upload Photo
              </label>

              <input
                type="file" 
								className="choose_file"
								// placeholder="chose file" 
								id="file"
								name="file"
								onChange={formik.handleChange}
								value={formik.values.file}
								/>
								 {formik.errors.file ? <div className="product_upload_error">{formik.errors.file}</div> : null}
            </div>
            <div className="unit-cost label_input">
              <label htmlFor="unit-cost" className="name">
                Quantity of Item
              </label>
              <input
                type="number"
								placeholder="0"
								id="product_qty"
								name="product_qty"
								onChange={formik.handleChange}
								value={formik.values.product_qty}
							/>
							 {formik.errors.product_qty ? <div className="product_upload_error">{formik.errors.product_qty}</div> : null}
            </div>
          </div>








          {/* <div className="default-unit-cost">
            <div className="default-unit-div label_input">
              <label htmlFor="unit-input" className="name">
                Default Unit
              </label>
              <input
                type="text"
                className="default-unit-input"
                value={unitInput}
                onChange={changeUnitInput}
              />
            </div>
            <div className="unit-cost label_input">
              <label htmlFor="unit-cost" className="name">
                Unit Cost/item
              </label>
              <input
                type="text"
                id="unit-cost"
                className="unit-cost-type"
                value={unitCost}
                onChange={changeUnitCost}
              />
            </div>
          </div>
          <div className="textarea-text label_input">
            <label htmlFor="product-desc" className="name">
              Product Description
            </label>
            <textarea
              id="product-desc"
              cols={30}
              rows={10}
              placeholder="product description"
              value={productDesc}
              onChange={changeProductDesc}
            />
          </div>
          <div className="upload-file">
            <label htmlFor="choose-file" className="name">
              Upload Photo
            </label>
            <div className="choose-file" id="choose-file">
              <input
                type="file"
                placeholder="Choose file"
                name="product_file[]"
                multiple="multiple"
                value={productFile}
                onChange={changeProductFile}
              />
            </div>
          </div> */}

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
