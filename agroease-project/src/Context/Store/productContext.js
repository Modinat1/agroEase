import { createContext, useState } from "react";

export const ProductContext = createContext({
	cart: [],
	addToCart: () => {},
	category: "",
	changeCategory: () => {},
});

export const ProductProvider = ({ children }) => {
	const [category, changeCategory] = useState(null);
	const [cart, addToCart] = useState(null);
	return (
		<ProductContext.Provider
			value={{
				category: category,
				changeCategory: changeCategory,
				cart: cart,
				addToCart: addToCart,
			}}>
			{children}
		</ProductContext.Provider>
	);
};
