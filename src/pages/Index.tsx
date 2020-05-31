import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import * as productsActions from "../actions/products";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import { bindActionCreators } from "redux";

import ProductCard from "../components/ProductCard";
import { Product } from "../@types";

import "../styles/App.scss";

type IndexProps = {
	products?: Product[];
	setProducts?: any;
	setIsReady?: any;
	isReady?: boolean;
};
export const Index: FC<IndexProps> = props => {
	useEffect(() => {
		if (!props.isReady) {
			axios.get("http://localhost:5000/products").then(({ data }) => {
				props.setProducts(data.data);
			});
		}
	});
	return (
		<div className="wrapper">
			<Container>
				<Card.Group itemsPerRow={4}>
					{!props.isReady ? "Загрузка..." : props.products!.map((product, i) => <ProductCard key={i} {...product} />)}
				</Card.Group>
			</Container>
		</div>
	);
};

const mapState = (state: any) => ({
	products: state.products.items,
	isReady: state.products.isReady
});

const mapDispatch = (dispatch: any) => ({
	...bindActionCreators(productsActions, dispatch)
});

export default connect(
	mapState,
	mapDispatch
)(Index);
