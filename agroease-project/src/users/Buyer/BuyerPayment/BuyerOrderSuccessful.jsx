import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../../../Context/axios-config/axios-user-config";

export const BuyerOrderSuccessful = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const payment_reference = searchParams.get("tx_ref");
	const transaction_id = searchParams.get("transaction_id");
	const newOrder = JSON.parse(localStorage.getItem("cartItems"));
	const navigate = useNavigate();
	const order = JSON.parse(localStorage.getItem("order"));

	console.log(order);
	const orderRow = newOrder.map(({ qty, id, StoreId, price }) => {
		return {
			ProductId: id,
			quantity: qty,
			total_price: qty * parseInt(price),
			price_pcs: price,
			comment: "",
			StoreId,
		};
	});

	console.log(orderRow.total_price);
	// console.log(total.amount);

	const payload = {
		order: {
			comment: "",
			total: order.total,
			payment_reference: payment_reference,
			transaction_id: transaction_id,
		},

		orderRow,
	};

	// console.log(total);

	const accessToken = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${accessToken}` },
	};

	const confirmPayment = async () => {
		try {
			const response = await axiosInstance.post("v1/orders", payload, config);

			console.log(response.data);

			if (response.status === 200) {
				localStorage.removeItem("order");
				localStorage.removeItem("cartItems");
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	Swal.fire({
		position: "top-center",
		icon: "success",
		title: "Payment Succsessful",
		showConfirmButton: true,
		confirmButtonColor: "#3085d6",
	}).then(() => {
		confirmPayment();
	});
};
