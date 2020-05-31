import React, { FC } from "react";
import { Card, Image, Icon, Button, Popup, Menu, List } from "semantic-ui-react";
import { Product } from "../@types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import "../styles/ProductCard.scss";

type ProductCardProps = Product;

const ProductCard: FC<ProductCardProps> = product => {
	const { name, desc, price, testo, diametr, img, addToCart } = product;
	return (
		<Card>
			<div className="card-image">
				<Image src={require(`../assets/img/${img}`)} />
			</div>
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>
					<span className="date">{desc}</span>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name="euro" />
					{price}
				</a>
				<Popup
					trigger={<Icon name="info" />}
					content={product !== undefined && <ListComponent {...product} key={product.id} />}
					hideOnScroll
				/>
			</Card.Content>
			<Button onClick={() => addToCart(product)}>Add to Cart</Button>
		</Card>
	);
};

const mapState = ({ cart }: { cart: any }, { id }: { id: any }) => ({
	addedCount: cart.items.reduce((count: number, product: Product) => count + (product.id === id ? 1 : 0), 0)
});

const mapDispatch = (dispatch: any) => ({
	...bindActionCreators(cartActions, dispatch)
});

export default connect(
	mapState,
	mapDispatch
)(ProductCard);

const ListComponent: FC<any> = ({ name, weight, numberOfPersons, protein, fat, energy }) => (
	<List selection divided verticalAlign="middle">
		<List.Item>
			<List.Content>{name}</List.Content>
		</List.Item>

		<List.Item>
			<List.Content floated="left">Weight</List.Content>
			<List.Content floated="right">{weight}</List.Content>
		</List.Item>
		<List.Item>
			<List.Content floated="left">Number of persons</List.Content>
			<List.Content floated="right">{numberOfPersons}</List.Content>
		</List.Item>
		<List.Item>
			<List.Content floated="left">Proteins</List.Content>
			<List.Content floated="right">{protein}</List.Content>
		</List.Item>
		<List.Item>
			<List.Content floated="left">Fats</List.Content>
			<List.Content floated="right">{fat}</List.Content>
		</List.Item>
		<List.Item>
			<List.Content floated="left">Energy value</List.Content>
			<List.Content floated="right">{energy}</List.Content>
		</List.Item>
	</List>
);
