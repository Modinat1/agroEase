import React, { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../Context/axios-config/axios-user-config";
import { ProductContext } from "../../Context/Store/productContext";

export const Categories = () => {
	const productStore = React.useContext(ProductContext);
	// const [categories, setcategories] = useState([]);

	// const getCategories = async () => {
	// 	const categories = await axiosInstance.get("v1/category");
	// 	console.log(categories.data);
	// 	setcategories(categories.data.name);
	// };

	// useEffect(() => {
	// 	getCategories();
	// }, []);

	const [allProducts, setallProducts] = useState([]);

	const getVerifiedProducts = async () => {
		try {
			const verifiedProducts = await axiosInstance.get("/v1/product/");
			console.log(verifiedProducts);
			setallProducts(verifiedProducts.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getVerifiedProducts();
	}, []);

	const categories = [
		{
			title: "Livestocks",
			action: "Livestocks",
			body: [],
		},
		{
			title: "Crops",
			action: "Crops",
			body: [],
		},
		{
			title: "Farm Inputs",
			action: "Farm Inputs",
			body: [],
		},
		{
			title: "Processed Products",
			action: "Processed Products",
			body: [],
		},
		{
			title: "Equipments",
			action: "Equipments",
			body: [],
		},
	];

	const changeCategory = (action) => {
		productStore.changeCategory(action);
	};

	return (
		<div class='buyers-product-category'>
			<ul>
				{categories.map((category, index) => {
					return (
						<li key={index} onClick={() => changeCategory(category.action)}>
							{category.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
