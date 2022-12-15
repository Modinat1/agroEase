import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../Context/axios-config/axios-user-config';



const BuyerClientOrderTable = () => {
    
    const allUser = JSON.parse(localStorage.getItem("loginUserInfo")) || [];
	const userInfo = JSON.parse(localStorage.getItem("user"));
	const {id} = allUser;
	const [order, setOrder] = useState([]);
	const accessToken = localStorage.getItem("token");

	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	const getOrders = async () => {
		try {
			const response = await axiosInstance.get(`v1/orders/${id}`,config);
			console.log(response.data);
			setOrder([response.data]);

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
    
                            {order.map((tables) => {
                                const { UserId, total, Status} = tables
                                return (
                                    <tbody className='adpro-general-tbody' key={UserId}>
                                        <tr>
                                            <td>{UserId}</td>
                                            <td>{total}</td>
                                            <td>
                                            {Status === 'delivered' ? (
													<div
														className='admin-verify'
														style={{
															backgroundColor: "green",
															color: "white",
														}}>
														<button>Verified</button>
													</div>
												) : (
													<div className='admin-verify'>
														<button>Pending</button>
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

export default BuyerClientOrderTable