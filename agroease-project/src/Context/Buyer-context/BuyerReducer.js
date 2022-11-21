import { ADD_TO_CART } from "./BuyerType";

export const BuyerReducer = (state, action) => {
	const { type, payload } = action;
	const { cart } = state;

	switch (type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...cart, payload],
			};

		default:
			return state;
	}
};
