import React from "react";
import "./AdminFarmTaskSwitch.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const AdminFarmTaskSwitch = () => {
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
				<CustomLink to={"/adminfarmertable"}>Store</CustomLink>
				{/* <CustomLink to={"/AdminLogisticsTask"}>All Products</CustomLink> */}
			</div>
		</>
	);
};

 