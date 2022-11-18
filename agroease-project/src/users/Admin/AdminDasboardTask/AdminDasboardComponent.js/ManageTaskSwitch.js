import React from "react";
import "./ManageTaskSwitch.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const TaskSwitch = () => {
	function CustomLink({ to, children, ...props }) {
		const resolePath = useResolvedPath(to);
		const isActive = useMatch({ path: resolePath.pathname });
		return (
			<Link to={to} className={isActive ? "admin-task-active" : ""}>
				{children}
			</Link>
		);
	}

	return (
		<>
			<div className='TaskSwitch-wrapper'>
				<CustomLink to={"/AdminTaskNotification"}>Notification</CustomLink>
				<CustomLink to={"/AdminLogisticsTask"}>Logistics</CustomLink>
				<CustomLink to={"/AdminPaymentTask"}>Payment</CustomLink>
			</div>
		</>
	);
};
