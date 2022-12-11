import React from "react";
import { useState } from "react";
import Navbar1 from "../Navbar1/Navbar1";
import PaystackPop from "@paystack/inline-js";
import "./PayStackForm.css";
import { useNavigate } from "react-router-dom";

export const PayStack = () => {
	const user = JSON.parse(localStorage.getItem("loginUserInfo"));
	const order = JSON.parse(localStorage.getItem("order"));
	console.log(user);
	const navigate = useNavigate();

	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [email, setEmail] = useState("");
	// const [amount, setAmount] = useState("");

	const PayByPaystack = (e) => {
		e.preventDefault();
		const paystack = new PaystackPop();
		paystack.newTransaction({
			key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524",
			firstName: user.firstname,
			lastName: user.lastname,
			email: user.email,
			amount: order.total * 100,
			onSuccess(transaction) {
				let message = `Payment Successful! Reference ${transaction.reference}`;
				localStorage.removeItem("cartItems");
				alert(message);
				// navigate("/");
				// setFirstName("");
				// setLastName("");
				// setEmail("");
				// setAmount("");
			},

			onCancel() {
				alert("Transaction Canceled");
			},
		});
	};
	return (
		<>
			<Navbar1 />
			<div className='paystack-form-container'>
				<h3>Paystack Payment</h3>
				<form>
					<div className='form-group'>
						<label htmlFor=''>First Name</label>
						<input
							type='text'
							value={user?.firstname}
							// placeholder='Enter First Name'
							// onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor=''>Last Name</label>
						<input
							type='text'
							value={user?.lastname}
							placeholder='Enter Last Name'
							// onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor=''>Email</label>
						<input
							type='text'
							value={user?.email}
							// onChange={(e) => setEmail(e.target.value)}
							placeholder='Enter Email'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor=''>Amount</label>
						<input
							type='text'
							value={order.total}
							// onChange={(e) => setAmount(e.target.value)}
							placeholder='Enter Amount'
						/>
					</div>

					<button
						type='submit'
						className='paystack-btn'
						onClick={PayByPaystack}>
						PAY
					</button>
				</form>
			</div>
		</>
	);
};
