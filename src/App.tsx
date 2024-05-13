import React from "react";
import style from './App.module.scss'

// Components or Layout
import Drawer from './components/Drawer'

// Routes
import { Routes, Route } from "react-router-dom";
import RoutesConfig from "./routes/routesConfig";
import Redirect from "./routes/redirect";

const App: React.FC = () => {
	const AllRoutes = RoutesConfig();

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
