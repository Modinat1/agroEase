import React from "react";
import "./ManageTaskSwitch.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const TaskSwitch = () => {
	function CustomLink({ to, children, ...props }) {
		const resolePath = useResolvedPath(to);
		const isActive = useMatch({ path: resolePath.pathname });
		return (
			<Link to={to} className={isActive ? "active" : ""}>
				{children}
			</Link>
		);
	}

	return (
		<>
			<div className='TaskSwitch-wrapper'>
				<CustomLink to={"/"}>Notification</CustomLink>
				<CustomLink to={"/Logistics"}>Logistics</CustomLink>
				<CustomLink to={"/Payment"}>Payment</CustomLink>
			</div>
		</>
	);
};
