import { useMemo } from "react";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import { IRouteConfig } from "../contracts/IRouteConfig";
import { useAuth } from '../utils/services/authentication'

const RoutesConfig = () => {

	const Auth = useAuth()
	const {User} = Auth;

	return useMemo(() => {
		// public routes
		let routesArray: IRouteConfig[] = [
			{
				path: `/`,
				component: Home,
				exact: true,
			},
		];

		// protected routes
		if (User) {
			routesArray = [
				...routesArray,
				{
					path: `/dashboard`,
					component: Dashboard,
					exact: true,
				},
				{
					path: `/all-sports/:sport/:slug`,
					component: Dashboard,
					exact: true,
				},
				{
					path: `/brands/:slug`,
					component: Dashboard,
					exact: true,
				},
				{
					path: `/order-history`,
					component: Order,
					exact: true,
				}
			];
		}
		
		if(!User) {
			routesArray = [
				...routesArray,
				{
					path: `/login`,
					component: Login,
					exact: true,
				},
				{
					path: `/register`,
					component: Register,
					exact: true,
				},
			];
		}

		return routesArray;
	}, [User]);

	// return routes
};

export default RoutesConfig;
