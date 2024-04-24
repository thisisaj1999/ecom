import { useMemo } from "react";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import { useGlobalStore } from "../utils/store";
import { IRouteConfig } from "../contracts/IRouteConfig";

const RoutesConfig = () => {
	const State = {
		globalState: {
			isLoggedIn: useGlobalStore((state) => state.isLoggedIn),
		},
	};

	return useMemo(() => {
		// public routes
		let routesArray: IRouteConfig[] = [
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

		// protected routes
		if (State.globalState.isLoggedIn) {
			routesArray = [
				...routesArray,
				{
					path: `/`,
					component: Home,
					exact: true,
				},
			];
		}

		return routesArray;
	}, [State.globalState.isLoggedIn]);

	// return routes
};

export default RoutesConfig;
