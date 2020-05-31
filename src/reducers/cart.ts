const initialState = {
	items: [],
	totalPrice: null,
	isConfirmed: false
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				items: [...state.items, action.payload]
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				items: state.items.filter((item: any) => item.id !== action.payload)
			};
		case "SET_CONFIRMED":
			return {
				...state,
				isConfirmed: true,
				totalPrice: state.items.reduce(
					(total: number, item: { price: string }) => parseFloat((total + Number(item.price.replace(",", "."))).toFixed(2)),
					3
				)
			};
		default:
			return state;
	}
};
