import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const BuyerPaymentfailed = () => {
	const navigate = useNavigate();
	Swal.fire({
		position: "center",
		icon: "error",
		title: "Something went wrong",
		showConfirmButton: true,
	}).then(() => {
		navigate("/BuyerOrderreview");
	});
};
