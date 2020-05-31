export const setProducts = (products: any[]) => ({
	type: "SET_PRODUCTS",
	payload: products
});

export const setIsReady = () => ({
	type: "SET_IS_READY",
	payload: true
});
