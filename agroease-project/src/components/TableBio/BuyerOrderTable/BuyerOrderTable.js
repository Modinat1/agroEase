import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../Context/axios-config/axios-user-config';
import Swal from "sweetalert2";
// import { AiOutlinePauseCircle } from 'react-icons/ai';
// import { BiEdit } from 'react-icons/bi';
// import { MdOutlineCancel } from 'react-icons/md';

const BuyerOrderTable = () => {

    const [orders, setOrders] = useState([])
    const tokenInfo = localStorage.getItem("token");
    const config = {
		headers: { Authorization: `Bearer ${tokenInfo}` },
	};


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
	
	// const notityfailure = () => {
	// 	Swal.fire({
	// 		title: "Error",
	// 		text: "Product failed to upload, Enter valid details",
	// 		icon: "error",
	// 		button: "Upload",
	// 	});
	// }

	// productVerification
	const productVerification = async (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenInfo}`,
			},
		};

		try {
			await axiosInstance.patch(`/v1/orders/${id}`, 
            {
                "Status": "delivered"
            }, 
            config);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	}

	// Verify Products starts here
	const verifyProduct = async (id) => {
		notifySuccess(id)
    }
    // Getting all Order
	const getOrders = async () => {
		try {
			const response = await axiosInstance.get(`v1/orders`, config);
			console.log(response.data);
			setOrders(response.data);

			return response;
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
		getOrders();
	}, []); 

  return (
    <div>
        <div className='general-table-bio-adpro'>
				<div className='general-table-width-adpro'>
					<table className='adpro-general-table'>
						<thead className='adpro-general-thead'>
							<tr className='adpro-general-tr'>
								<th>ID</th>
								<th>Total Price</th>
								<th>Status</th>
								
							</tr>
						</thead>

						{/* Mapping through the array to get the table details */}

						{orders.map((tables) => {
							return (
								<tbody className='adpro-general-tbody'>
									<tr>
										<td>{tables.UserId}</td>
										<td>{tables.total}</td>
										<td>
											{tables.Status === 'paid'? (
												<div
													className='admin-verify'
													style={{ backgroundColor: "green", color: "white" }}>
													<button onClick={() => verifyProduct(tables.id)}>
                                                    Verify
                                                    </button>
												</div>
											 ) : (
												<div className='admin-verify'>
													<button >
														Verified
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
  )
}


export default BuyerOrderTable
