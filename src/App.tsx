import React, { useEffect } from "react";
import style from './App.module.scss'

// Components or Layout
import Drawer from './components/Drawer'

// Routes
import { Routes, Route } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import Redirect from "./routes/redirect";

// State
import { useDashboardStore, useGlobalStore, useUserStore } from "./utils/store";

// Others
import { getAllItems } from "./utils/services/requests";
import { getCartItems } from "./utils/services/other";

const App: React.FC = () => {
	const AllRoutes = RoutesConfig();

	const Update = {
		Dashboard: {
			itemsData: useDashboardStore((State) => State.setItemsData),
			cartItemsLength: useDashboardStore((State) => State.setCartItemsLength)
		},
		Global: {
			isLoading: useGlobalStore((State) => State.setIsLoading)
		},
	};

	const State = {
		User: {
			id: useUserStore((State) => State.id)
		}
	}

	useEffect(() => {
		if(State.User.id){
			Update.Global.isLoading(false)
			const cartItems = getCartItems(State.User.id)
			Update.Dashboard.cartItemsLength(cartItems?.length || 0)
		}
	},[State.User.id])

	useEffect(() => {
		const fetchData = async () => {
      try {
        const data = await getAllItems();
				Update.Dashboard.itemsData(data)
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
	},[])

	return (
		<div className={style.App}>
			<Routes>
				{AllRoutes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<route.component />}
						/>
					);
				})}

				{/* WildCard Routes */}
				<Route path="*" element={<Redirect />} />
			</Routes>
			<Drawer/>
		</div>
	);
};

export default App;
