import React from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { MdOutlineCancel } from 'react-icons/md'
import "./AdminProductTable.css"
import { adminpayment } from '../AdminPaymentTable/AdminPaymentModule'
import GeneralUserAuth from '../../../Context/user-auth/GeneralUserAuth'
import { useState } from 'react'
import { useEffect } from 'react'
// import axiosInstance from '../../../Context/axios-config/axios-user-config'
import axios from 'axios'
import { useContext } from 'react'
import axiosInstance from '../../../Context/axios-config/axios-user-config'
// import UserAuth from '../../../Context/user-auth/UserAuthContext'

const AdminProductTable = () => {
    const { userAuth } = GeneralUserAuth();
    const { accessToken, allUser } = userAuth;
    console.log(accessToken)
	// Gets all products function starts here
	const [allProducts, setallProducts] = useState([]);
	const config = {
	headers: { Authorization: `Bearer ${accessToken}` }
	};

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

  return (
    <div>
        <div className='general-table-bio-adpro'>
        <div className='general-table-width-adpro'>
            <table className='adpro-general-table'>
                <thead className='adpro-general-thead'>
                    <tr className='adpro-general-tr'>
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

                {allProducts.map(tables => {
                    return(
                    <tbody className='adpro-general-tbody'>
                    <tr>
                        <td>{tables.StoreId}</td>
                        <td>{tables.name}</td>
                        <td>{tables.description}</td>
                        <td>{tables.quantity}</td>
                        <td>{tables.price}</td>
                        <td>
							<div className="styletableicon">
								<BiEdit />
								<AiOutlinePauseCircle />
								<MdOutlineCancel />
							</div>
					    </td> 
                        <td>
							<div className="admin-verify">
								<button>Verify</button>
							</div>
					    </td> 
                    </tr>
                </tbody> 
                    )
            })}
            </table>
        </div>
    </div>
    </div>
  )
}

export default AdminProductTable