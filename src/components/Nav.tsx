import React, { FC } from "react";
import "../styles/Nav.scss";
import { Popup, Menu, List, Button, Image, Icon } from "semantic-ui-react";
import * as cartActions from "../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

type NavProps = {
	totalPrice?: number;
	count?: number;
	items?: CartComponentProps[];
	isConfirmed?: boolean;
	totalOrderPrice?: number;
};

const Nav: FC<NavProps> = ({ totalPrice, isConfirmed, totalOrderPrice, count, items }) => {
	return (
		<div className="nav-wrapper">
			<div className="center">
				<nav>
					<Link to="/" className="nav-link">
						Pizza order app
					</Link>
				</nav>
				<Menu>
					<Menu.Item name="total">
						Total: &nbsp; <b>{!isConfirmed ? totalPrice : totalOrderPrice}</b> &nbsp;
						<Icon name="euro" />
					</Menu.Item>
					<Popup
						trigger={
							<Menu.Item name="cartList">
								<Icon name="cart" /> (<b>{count}</b>)
							</Menu.Item>
						}
						content={
							items !== undefined &&
							items.map((product: CartComponentProps, i: number) => <CartComponent {...product} key={i} />)
						}
						on="click"
						hideOnScroll
					/>
					<Link to="/cart">
						<Menu.Item name="cart">Go to Cart</Menu.Item>
					</Link>
				</Menu>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cart }: { cart: any }) => ({
	totalPrice: cart.items.reduce(
		(total: number, item: { price: string }) => parseFloat((total + Number(item.price.replace(",", "."))).toFixed(2)),
		0
	),
	isConfirmed: cart.isConfirmed,
	totalOrderPrice: cart.totalPrice,
	count: cart.items.length,
	items: cart.items
});

const mapDispatchToProps = (dispatch: any) => ({
	...bindActionCreators(cartActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);

export type CartComponentProps = {
	name: string;
	id: string;
	img: string;
	removeFromCart: any;
};

export const CartComponent: FC<CartComponentProps> = ({ name, id, img, removeFromCart }) => (
	<List selection divided verticalAlign="middle" className="popupList">
		<List.Item>
			<List.Content>
				<Image avatar src={require(`../assets/img/${img}`)} />
			</List.Content>
			<List.Content>{name}</List.Content>
			<List.Content>
				<Button onClick={() => removeFromCart(id)} color="red">
					X
				</Button>
			</List.Content>
		</List.Item>
	</List>
);
