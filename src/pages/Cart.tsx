import React, { FC } from "react";
import { connect } from "react-redux";
import * as cartActions from "../actions/cart";
import { bindActionCreators } from "redux";
import { List, Image, Button } from "semantic-ui-react";
import "../styles/Cart.scss";
import { Link } from "react-router-dom";

type CartProps = { items?: any; removeFromCart?: any; totalPrice?: number; setConfirmed?: any };
const Cart: FC<CartProps> = ({ items, removeFromCart, totalPrice, setConfirmed }) => {
	return (
		<div className="container cart">
			{items.length > 0 ? (
				<>
					<h1>Your Order is:</h1>
					<List selection divided verticalAlign="middle" className="cartList">
						{items.map((item: any, i: number) => {
							return (
								<List.Item key={i}>
									<List.Content>
										<Image avatar src={require(`../assets/img/${item.img}`)} />
									</List.Content>

									<List.Content>{item.name}</List.Content>
									<List.Content>
										<Button onClick={() => removeFromCart(item.id)} color="red">
											Delete from Cart
										</Button>
									</List.Content>
								</List.Item>
							);
						})}
					</List>
					<List selection divided verticalAlign="middle" className="totalList">
						<List.Item>
							<List.Content floated="left">
								<h2>Delivery cost:</h2>
							</List.Content>
							<List.Content floated="right">
								<h2>3 €</h2>
							</List.Content>
						</List.Item>

						<List.Item>
							<List.Content floated="left">
								<h2>Total cost:</h2>
							</List.Content>
							<List.Content floated="right">
								<h2>{totalPrice! + 3} €</h2>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Content floated="right">
								<Link to="/order">
									<Button color="green" onClick={() => setConfirmed(true)}>
										Confirm
									</Button>
								</Link>
							</List.Content>
						</List.Item>
					</List>
				</>
			) : (
				<h2>Your Cart is empty...</h2>
			)}
		</div>
	);
};

const mapState = (state: any) => ({
	items: state.cart.items,
	totalPrice: state.cart.items.reduce(
		(total: number, item: { price: string }) => parseFloat((total + Number(item.price.replace(",", "."))).toFixed(2)),
		0
	)
});

const mapDispatch = (dispatch: any) => ({
	...bindActionCreators(cartActions, dispatch)
});

export default connect(
	mapState,
	mapDispatch
)(Cart);
