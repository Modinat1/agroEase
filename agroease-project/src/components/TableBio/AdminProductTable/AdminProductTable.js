import React from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import "./AdminProductTable.css";
import { adminpayment } from "../AdminPaymentTable/AdminPaymentModule";
import GeneralUserAuth from "../../../Context/user-auth/GeneralUserAuth";
import { useState } from "react";
import { useEffect } from "react";
// import axiosInstance from '../../../Context/axios-config/axios-user-config'
import axios from "axios";
import { useContext } from "react";
import axiosInstance from "../../../Context/axios-config/axios-user-config";
import Swal from "sweetalert2";
// import UserAuth from '../../../Context/user-auth/UserAuthContext'

const AdminProductTable = () => {
	const [allProducts, setallProducts] = useState([]);
	const tokenInfo = localStorage.getItem("token");
	// const allUser = localStorage.getItem("loginUserInfo");
	
	// const {id} = allUser
	// console.log(id)
	console.log(tokenInfo);
	const config = {
		headers: { Authorization: `Bearer ${tokenInfo}` },
	};


	// Getting all products
	const getAllProduct = async () => {
		try {
			const response = await axiosInstance.get(`v1/product/admin`, config);
			console.log(response.data);
			setallProducts(response.data);


			return response;
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getAllProduct();
	}, []);


	// SweetAlert
	const notifySuccess = (id) => {
		Swal.fire({
			title: "Verify!",
			text: "Do you want to Verify this Product?!",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Yes',
			confirmButtonColor: "#097c0d",
			denyButtonText: 'No',
			customClass: {
			actions: 'my-actions',
			cancelButton: 'order-1 right-gap',
			confirmButton: 'order-2',
			denyButton: 'order-3',
			}
		}).then(function(result){
			if(result.value){
				productVerification(id)
			}else if(result.dismiss === 'cancel'){
			   console.log('cancel');
			}
	
		});
	};
	
	const notityfailure = () => {
		Swal.fire({
			title: "Error",
			text: "Product failed to upload, Enter valid details",
			icon: "error",
			button: "Upload",
		});
	}

	// productVerification
	const productVerification = async (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenInfo}`,
				"Content-Type": "multipart/form-data",
			},
		};
		const update = new FormData();
		update.append("product", JSON.stringify({ status: true }));
		update.forEach((data) => console.log(data));

		try {
			await axiosInstance.patch(`/v1/product/${id}`, update, config);

			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	}

	// Verify Products starts here
	const verifyProduct = async (id) => {
		notifySuccess(id)
		
	// };

		// const config = {
		// 	headers: {
		// 		Authorization: `Bearer ${tokenInfo}`,
		// 		"Content-Type": "multipart/form-data",
		// 	},
		// };
		// const update = new FormData();
		// update.append("product", JSON.stringify({ status: true }));
		// update.forEach((data) => console.log(data));

		// try {
		// 	await axiosInstance.patch(`/v1/product/${id}`, update, config);

		// 	window.location.reload();
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const deleteProduct = async (id) => {
		try {
			const response = await axiosInstance.delete(`v1/product/${id}`, config);
			console.log(response.data);
			window.location.reload();
			return response;
		} catch (error) {
			console.log(error);
		}
	};

  // const deleteProductById = async (id) => {
  //   console.log("i was clicked");
  //   try {
  //     await axiosInstance.delete(`/v1/product/${id}`, config);
  //     window.location.reload();
  //   } catch (error){
	// 		console.log(error)
	// 	}
  // };


  return (
    <div>
      <div className="general-table-bio-adpro">
        <div className="general-table-width-adpro">
          <table className="adpro-general-table">
            <thead className="adpro-general-thead">
              <tr className="adpro-general-tr">
                <th>Store ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price (₦)</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>

            {/* Mapping through the array to get the table details */}

						{allProducts.map((tables) => {
							return (
								<tbody className='adpro-general-tbody'>
									<tr>
										<td>{tables.StoreId}</td>
										<td>{tables.name}</td>
										<td>{tables.description}</td>
										<td>{tables.quantity}</td>
										<td>{tables.price}</td>
										<td>
											<div className='styletableicon'>
												<BiEdit />
												<AiOutlinePauseCircle />
												<MdOutlineCancel
													onClick={() => deleteProduct(tables.id)}
												/>
											</div>
										</td>
										<td>
											{tables.status ? (
												<div
													className='admin-verify'
													style={{ backgroundColor: "green", color: "white" }}>
													<button>Verified</button>
												</div>
											) : (
												<div className='admin-verify'>
													<button onClick={() => verifyProduct(tables.id)}>
														Verify
													</button>
												</div>
											)}
										</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				</div>
			</div>
		</div>
	);
};

export default AdminProductTable;
