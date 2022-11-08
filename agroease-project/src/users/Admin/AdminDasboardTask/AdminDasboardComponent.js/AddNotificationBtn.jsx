import React from "react";
import { useState } from "react";
import "./AddNotification.css";
import { AdminNotificationModal } from "../../AdminNotificationModal/AdminNotificationModal";

export const AddNotificationBtn = () => {
	const [showModal, setShowModal] = useState(false)

	const openModal = () => {
		setShowModal(true)
	}
	return(
		<>
	 <button className='Add-notification-btn' onClick={openModal}>Add Notification </button>
	 {showModal ? <AdminNotificationModal setShowModal={setShowModal}/> : null}
	 </>
	 )

};
