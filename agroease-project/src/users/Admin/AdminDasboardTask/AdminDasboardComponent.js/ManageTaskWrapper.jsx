import React from "react";
import { AddNotificationBtn } from "./AddNotificationBtn";
import { ManageTask } from "./ManageTask";
import "./ManageTaskWrapper.css";

export const ManageTaskWrapper = () => {
	return (
		<div className='ManageTaskWrapper'>
			<ManageTask />
			<AddNotificationBtn />
		</div>
	);
};
