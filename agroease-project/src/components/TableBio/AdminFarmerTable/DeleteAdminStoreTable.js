import React from 'react'
import { useState } from 'react';

export const DeleteAdminStoreTable = () => {
  const tokenInfo = localStorage.getItem("token");
	console.log(tokenInfo);
  
	const config = {
		headers: { Authorization: `Bearer ${tokenInfo}` },
	};
  const [deleteStoreId, setDeleteStoreId] = useState([]);
 
  const deleteStore = ()=>{
    try {
      const productToUpdate = axiosInstance.delete(
				`/v1/store/${id}`, config);
    } catch (error) {
      
    }
  }

  return (
    <div></div>
  )
}
