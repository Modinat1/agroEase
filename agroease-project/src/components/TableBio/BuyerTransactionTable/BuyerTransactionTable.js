import React from 'react'
import "./BuyerTransactionTable.css"
import { adminLogistics } from '../AdminBuyerTableCompo/AdminSuccessModule';

const BuyerTransactionTable = () => {
  return (
    <div className='general-table-bio-trans'>
			<div className='general-table-width-trans'>
				<table className='trans-general-table'>
					<thead className='trans-general-thead'>
						<tr className='trans-general-tr'>
							<th>S/N</th>
							<th>Product Name</th>
							<th>Description</th>
							<th>Category</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Status</th>
						</tr>
					</thead>

					{/* Mapping through the array to get the table details */}

					{adminLogistics.map((tables) => {
						return (
							<tbody className="trans-general-tbody">
								<tr>
									<td>{tables.id}</td>
									<td>{tables.name}</td>
									<td>{tables.account}</td>
									<td>{tables.ccv}</td>
									<td>{tables.balance}</td>
									<td>{tables.date}</td>
									<td>{tables.status}</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
  )
}

export default BuyerTransactionTable