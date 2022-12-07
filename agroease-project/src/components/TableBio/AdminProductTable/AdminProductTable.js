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
import UserAuth from '../../../Context/user-auth/UserAuthContext'

const AdminProductTable = () => {

    const { userAuth} = useContext(UserAuth);
    // const { userAuth } = GeneralUserAuth();
	const  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MDM0NTIyOSwiZXhwIjoxNjcwMzQ3MDI5LCJ0eXBlIjoiYWNjZXNzIn0.VW-bPsvGy4vXNGtPNr3ButWjANHcTsKZu1Wmrb_evHo";
    console.log(accessToken)
	const [product, setProduct] = useState([]);
	const config = {
	headers: { Authorization: `Bearer ${accessToken}` }
	};

	const getProduct = async () => {
		try {
			const response = await axios.get(
				`https://agro-ease-backend-production.up.railway.app/v1/product/admin`,
				config
			);
			console.log(response.data);
			setProduct(response.data);
			
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	
	useEffect(() => {
		getProduct();
	}, []);



  return (
    <div>
        <div className='general-table-bio-adpro'>
        <div className='general-table-width-adpro'>
            <table className='adpro-general-table'>
                <thead className='adpro-general-thead'>
                    <tr className='adpro-general-tr'>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Product Description</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>

                {/* Mapping through the array to get the table details */}

                {product.map(tables => {
                    return(
                    <tbody className='adpro-general-tbody'>
                    <tr>
                        <td>{tables.id}</td>
                        <td>{tables.acctName}</td>
                        <td>{tables.acctNumber}</td>
                        <td>{tables.ccv}</td>
                        <td>{tables.balance}</td>
                        <td>
							<div className={tables.tbcIcon}>
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