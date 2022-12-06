import React from 'react'
import "./AdminPaymentTable.css"
import { adminpayment } from './AdminPaymentModule'
import GeneralUserAuth from '../../../Context/user-auth/GeneralUserAuth';
import { useState } from 'react';
import axiosInstance from '../../../Context/axios-config/axios-user-config';
import { useEffect } from 'react';

const AdminPaymentTable = () => {
    const { userAuth } = GeneralUserAuth();
	const { accessToken} = userAuth;
	const [users, setUsers] = useState([]);
	const config = {
	headers: { Authorization: `Bearer ${accessToken}` },
	};

	const getStore = async () => {
		try {
			const response = await axiosInstance.get(
				`/v1/users`,
				config
			);
			console.log(response.data);
			setUsers(response.data);
			
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	
	useEffect(() => {
		setUsers();
	}, []);

  return (
    <div>
        <div className='general-table-bio-pay'>
        <div className='general-table-width-pay'>
            <table className='pay-general-table'>
                <thead className='pay-general-thead'>
                    <tr className='pay-general-tr'>
                        <th>Id</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>CCV</th>
                        <th>Balance</th>
                        <th>Date Transfer</th>
                        <th>Transaction</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {/* Mapping through the array to get the table details */}

                {adminpayment.map(tables => {
                    return(
                    <tbody className={tables.tbcName}>
                    <tr>
                        <td>{tables.id}</td>
                        <td>{tables.acctName}</td>
                        <td>{tables.acctNumber}</td>
                        <td>{tables.ccv}</td>
                        <td>{tables.balance}</td>
                        <td>{tables.dateTransfer}</td>
                        <td>{tables.transaction}</td>
                        <td>{tables.status}</td>
                        <td>{tables.action}</td>
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

export default AdminPaymentTable