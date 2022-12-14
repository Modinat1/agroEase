import React from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { adminLogistics, adminSuccessTable } from '../AdminBuyerTableCompo/AdminSuccessModule';

const AdminWalletTable = () => {
    return (
		<div>
			<div className='general-table-bio-adfarm'>
				<div className='general-table-width-adfarm'>
					<table className='adfarm-general-table'>
						<thead className='adfarm-general-thead'>
							<tr className='adfarm-general-tr'>
								<th>ID</th>
								<th>Account Name</th>
								<th>Account Number</th>
								<th>Balance</th>
								<th>Bank</th>
								<th>NIN</th>
								<th>DOB</th>
								<th>Action</th>
							</tr>
						</thead>

						{/* Mapping through the array to get the table details */}

						{adminLogistics.map((tables) => {
							return (
								<tbody className='adfarm-general-tbody'>
									<tr>
                                        <td>{tables.id}</td>
                                        <td>{tables.name}</td>
                                        <td>{tables.account}</td>
                                        <td>{tables.ccv}</td>
                                        <td>{tables.balance}</td>
                                        <td>{tables.date}</td>
                                        <td>{tables.status}</td>
                                        <td>{tables.action}</td>
										<td>
											<div className='styletableicon'>
												<BiEdit />
												<AiOutlinePauseCircle />
												<MdOutlineCancel />
											</div>
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