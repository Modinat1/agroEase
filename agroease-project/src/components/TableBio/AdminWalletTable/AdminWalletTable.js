import React, { useEffect, useState } from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import Swal from "sweetalert2";
import axiosInstance from '../../../Context/axios-config/axios-user-config';
import GeneralUserAuth from '../../../Context/user-auth/GeneralUserAuth';
import { adminLogistics, adminSuccessTable } from '../AdminBuyerTableCompo/AdminSuccessModule';

const AdminWalletTable = () => {

    
    const [wallets, setWallets] = useState([])
    const tokenInfo = localStorage.getItem("token");
    const getWallet = JSON.parse(localStorage.getItem("wallet"));
    console.log(getWallet.data)
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
				walletUpdate(id)
			}else if(result.dismiss === 'cancel'){
			   console.log('cancel');
			}
	
		});
	};

    // walletUpdate
	const walletUpdate = async (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenInfo}`,
			},
		};

		try {
			await axiosInstance.patch(`/v1/wallet/${id}`, 
            // {
            //     "balance": 
            // }, 
            config);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	}

    // Getting all Order
	const getWallets = async () => {
		try {
			const response = await axiosInstance.get(`v1/wallet`, config);
			console.log(response.data);
			setWallets(response.data);
            const wallets = response.data
            localStorage.setItem("wallet", JSON.stringify(wallets));
			return response;
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
		getWallets();
	}, []); 

    return (
		<div>
			<div className='general-table-bio-adfarm'>
				<div className='general-table-width-adfarm'>
					<table className='adfarm-general-table'>
						<thead className='adfarm-general-thead'>
							<tr className='adfarm-general-tr'>
								<th>ID</th>
								<th>Type</th>
								<th>Account Name</th>
								<th>Account Number</th>
								<th>Balance</th>
								<th>Bank</th>
								<th>NIN</th>
								<th>DOB</th>
								<th>Action</th>
								<th>Status</th>
							</tr>
						</thead>

						{/* Mapping through the array to get the table details */}

						{wallets.map((tables) => {
                            const {id, account_name, account_number, balance, bank, date_of_birth, nin, type} = tables
							return (
								<tbody className='adfarm-general-tbody'>
									<tr>
                                        <td>{id}</td>
                                        <td>{type}</td>
                                        <td>{account_name}</td>
                                        <td>{account_number}</td>
                                        <td>{balance}</td>
                                        <td>{bank}</td>
                                        <td>{nin}</td>
                                        <td>{date_of_birth}</td>
										<td>
											<div className='styletableicon'>
												<BiEdit />
												<AiOutlinePauseCircle />
												<MdOutlineCancel />
											</div>
										</td>
                                        <td>
                                            {/* {tables.Status === 'paid'? ( */}
												<div
													className='admin-verify'
													style={{ backgroundColor: "green", color: "white" }}>
													<button /*onClick={() => verifyProduct(tables.id)}*/>
                                                    Verify
                                                    </button>
												</div>
											 {/* ) : (
												<div className='admin-verify'>
													<button >
														Verified
													</button>
												</div>
											)}  */}
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
}

export default AdminWalletTable