import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

import { routes } from "./routes";

import "./styles/App.scss";

export const App: FC = () => {
	const renderSwitch = () => (
		<Switch>
			{routes.map(route => {
				const component = route.component;
				return <Route key={route.id} exact={route.isExact} path={route.path} component={component} status={route.status} />;
			})}
		</Switch>
	);

	return (
		<div className="wrapper">
			<Nav />
			{renderSwitch()}
		</div>
	);
};
