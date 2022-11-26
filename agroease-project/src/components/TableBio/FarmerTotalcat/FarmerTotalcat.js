import React from 'react'
import { farmertotalcat } from './FarmerTotalcatModule';
import "./FarmerTotalcat.css"

const FarmerTotalcat = () => {
  return (
    <div>
        <div className='general-table-bio-farm'>
        <div className='general-table-width-farm'>
            <table className='farm-general-table'>
                <thead className='farm-general-thead'>
                    <tr className='farm-general-tr'>
                        <th>Categories</th>
                        <th>sold Quantities</th>
                        <th>Available Quantities</th>
                        <th>Total price/month</th>
                    </tr>
                </thead>

                {/* Mapping through the array to get the table details */}

                {farmertotalcat.map(tables => {
                    return(
                    <tbody className={tables.tbcName}>
                    <tr>
                        <td>{tables.Categories}</td>
                        <td>{tables.soldqty}</td>
                        <td>{tables.availqty}</td>
                        <td>{tables.TPM}</td>
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

export default FarmerTotalcat