import React, { FC } from "react";
import { connect } from "react-redux";
import * as orderActions from "../actions/order";
import { bindActionCreators } from "redux";
import { Form, Input, Button } from "semantic-ui-react";
import "../styles/Cart.scss";

type OrderProps = {
	getUserName?: any;
	getUserPhone?: any;
	getUserEmail?: any;
	getUserAddress?: any;
	userName?: string;
	userPhone?: string;
	userEmail?: string;
	userAddress?: string;
	items?: any;
};
const Order: FC<OrderProps> = ({
	getUserName,
	getUserPhone,
	getUserEmail,
	getUserAddress,
	userName,
	userPhone,
	userEmail,
	userAddress,
	items
}) => {
	return (
		<div className="container cart">
			<h1>Fill the contact and delivery information</h1>
			<Form>
				<Form.Group widths="equal">
					<Form.Field
						id="form-input-control-first-name"
						control={Input}
						placeholder="First name"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => getUserName(e.currentTarget.value)}
					/>
					<Form.Field
						id="form-input-control-last-name"
						control={Input}
						placeholder="Phone"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => getUserPhone(e.currentTarget.value)}
					/>
					<Form.Field
						id="form-input-control-error-email"
						control={Input}
						placeholder="Email"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => getUserEmail(e.currentTarget.value)}
					/>
				</Form.Group>
				<Form.Field
					id="form-textarea-control-opinion"
					control={Input}
					placeholder="Delivery address"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => getUserAddress(e.currentTarget.value)}
				/>

				<Form.Field
					id="form-button-control-public"
					control={Button}
					content="Confirm"
					onClick={() => console.log("order:", { userName, userPhone, userEmail, userAddress, items })}
				/>
			</Form>
		</div>
	);
};

const mapState = (state: any) => ({
	userName: state.order.userName,
	userPhone: state.order.userPhone,
	userEmail: state.order.userEmail,
	userAddress: state.order.userAddress,
	items: state.cart.items
});

const mapDispatch = (dispatch: any) => ({
	...bindActionCreators(orderActions, dispatch)
});

export default connect(
	mapState,
	mapDispatch
)(Order);
