import React from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { MdOutlineCancel } from 'react-icons/md'
import "./AdminProductTable.css"
import { adminpayment } from '../AdminPaymentTable/AdminPaymentModule'

const AdminProductTable = () => {
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

                {adminpayment.map(tables => {
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