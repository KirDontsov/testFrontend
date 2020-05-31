const initialState = {
	userName: "",
	userPhone: "",
	userEmail: "",
	userAddress: ""
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case "GET_USER_NAME":
			return {
				...state,
				userName: action.payload
			};
		case "GET_USER_PHONE":
			return {
				...state,
				userPhone: action.payload
			};
		case "GET_USER_EMAIL":
			return {
				...state,
				userEmail: action.payload
			};
		case "GET_USER_ADDRESS":
			return {
				...state,
				userAddress: action.payload
			};
		default:
			return state;
	}
};
