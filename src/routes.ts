import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { Err } from "./pages/Err";

export const routes = [
	// --------------------------- isNavBar
	{
		id: 1,
		isNavBar: true,
		isExact: true,
		path: "/",
		name: "Для пользователей",
		className: "nav-link",
		component: Index
	},
	{
		id: 2,
		isNavBar: true,
		isExact: true,
		path: "/cart",
		name: "Cart",
		className: "nav-link",
		component: Cart
	},
	{
		id: 3,
		isNavBar: true,
		isExact: true,
		path: "/order",
		name: "Order",
		className: "nav-link",
		component: Order
	},

	// --------------------------- 404
	{
		id: 18,
		isExact: true,
		component: Err,
		status: 404
	}
];
