import React from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import "./AdminFarmerTable.css"
import { MdOutlineCancel } from 'react-icons/md'
import axiosInstance from '../../../Context/axios-config/axios-user-config'
import { useState } from 'react'
import { useEffect } from 'react'
import GeneralUserAuth from '../../../Context/user-auth/GeneralUserAuth'

const AdminFarmerTable = () => {
    const { userAuth } = GeneralUserAuth();
	const { accessToken} = userAuth;
	const [store, setStore] = useState([]);
	const config = {
	headers: { Authorization: `Bearer ${accessToken}` },
	};

	const getStore = async () => {
		try {
			const response = await axiosInstance.get(
				`/v1/store`,
				config
			);
			console.log(response.data);
			setStore(response.data);
			
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	
	useEffect(() => {
		getStore();
	}, []);
  return (
    <div>
        <div className='general-table-bio-adfarm'>
        <div className='general-table-width-adfarm'>
            <table className='adfarm-general-table'>
                <thead className='adfarm-general-thead'>
                    <tr className='adfarm-general-tr'>
                        <th>ID</th>
                        <th>Business Name</th>
                        <th>Business Email</th>
                        <th>Business Phone/Num</th>
                        <th>Store Description</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Bank</th>
                        <th>NIN</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {/* Mapping through the array to get the table details */}

                {store.map(tables => {
                    return(
                    <tbody className='adfarm-general-tbody'>
                    <tr>
                        <td>{tables.id}</td>
                        <td>{tables.name}</td>
                        <td>{tables.business_email}</td>
                        <td>{tables.phone_number}</td>
                        <td>{tables.description}</td>
                        <td>{tables.Wallet.account_name}</td>
                        <td>{tables.Wallet.account_number}</td>
                        <td>{tables.Wallet.bank}</td>
                        <td>{tables.Wallet.nin}</td>
                        <td>{tables.Wallet.date_of_birth}</td>
                        <td>
							<div className="styletableicon">
								<BiEdit />
								<AiOutlinePauseCircle />
								<MdOutlineCancel />
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

export default AdminFarmerTable