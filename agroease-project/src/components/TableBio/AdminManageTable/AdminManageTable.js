import React from 'react'
import "../AdminBrokerTable/AdminBrokerTableCompo/AdminBrokerTable.css"
import { adminManageTask } from './AdminManageTableModule'

const AdminManageTable = () => {
  return (
    <div className='general-table-bio'>
        <div className='general-table-width'>
            <table className='admin-general-table'>
                <thead className='admin-general-thead'>
                    <tr className='admin-general-tr'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>

                {/* Mapping through the array to get the table details */}

                {adminManageTask.map(tables => {
                    return(
                    <tbody className={tables.tbcName}>
                    <tr>
                        <td>{tables.id}</td>
                        <td>{tables.name}</td>
                        <td>{tables.email}</td>
                        <td>{tables.message}</td>
                        <td>{tables.status}</td>
                    </tr>
                </tbody> 
                    )
            })}
            </table>
        </div>
    </div>
  )
}

export default AdminManageTable