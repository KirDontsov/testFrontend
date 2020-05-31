export const getUserName = (name: string) => ({
	type: "GET_USER_NAME",
	payload: name
});

export const getUserPhone = (phone: string) => ({
	type: "GET_USER_PHONE",
	payload: phone
});

export const getUserEmail = (email: string) => ({
	type: "GET_USER_EMAIL",
	payload: email
});

export const getUserAddress = (address: string) => ({
	type: "GET_USER_ADDRESS",
	payload: address
});
