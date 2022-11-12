import React from 'react'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import {BiEdit} from "react-icons/bi"
import {MdOutlineCancel} from "react-icons/md"
import {adminbroker} from "./AdminBrokerModule"
import "./AdminBrokerTable.css"

const AdminBrokerTable = () => {
  return (
    <div className='general-table-bio'>
        <div className='general-table-width'>
            <table className='admin-general-table'>
                <thead className='admin-general-thead'>
                    <tr className='admin-general-tr'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {/* Mapping through the array to get the table details */}

                {adminbroker.map(tables => {
                    return(
                    <tbody className={tables.tbcName}>
                    <tr>
                        <td>{tables.id}</td>
                        <td>{tables.name}</td>
                        <td>{tables.email}</td>
                        <td>{tables.phoneNumber}</td>
                        <td>{tables.gender}</td>
                        <td>{tables.address}</td>
                        <td>
                            <div className={tables.tbcIcon}>
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
  )
}

export default AdminBrokerTable