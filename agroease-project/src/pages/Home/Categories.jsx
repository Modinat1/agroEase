import React from "react";
import { ProductContext } from "../../Context/Store/productContext";

export const Categories = () => {
	const productStore = React.useContext(ProductContext);

	const categories = [
		{
			title: "Livestocks",
			action: "livestocks",
		},
		{
			title: "Crops",
			action: "Crops",
		},
		{
			title: "Farm Inputs",
			action: "Farm Inputs",
		},
		{
			title: "Processed Products",
			action: "Processed Products",
		},
		{
			title: "Equipments",
			action: "Equipments",
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
