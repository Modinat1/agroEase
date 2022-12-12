import React from 'react'
import BuyerTransactionTable from '../../../components/TableBio/BuyerTransactionTable/BuyerTransactionTable'

const BuyerTransaction = () => {
  return (
    <div className='mt-8'>
        <p className='pl-6 text-2xl bold'>Transaction History</p>
        <BuyerTransactionTable />
    </div>
  )
}

export default BuyerTransaction