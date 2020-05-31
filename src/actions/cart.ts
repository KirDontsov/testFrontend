import { Product } from "../@types";

export const addToCart = (obj: Product) => ({
	type: "ADD_TO_CART",
	payload: obj
});

export const removeFromCart = (id: string) => ({
	type: "REMOVE_FROM_CART",
	payload: id
});

export const setConfirmed = () => ({
	type: "SET_CONFIRMED",
	payload: true
});
