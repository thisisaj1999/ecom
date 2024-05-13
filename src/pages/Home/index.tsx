import React, { useEffect } from "react";
import styles from "./Home.module.scss";

// Components or Layout
import Hero from "../../components/LandingPage/Hero";
import NewArrivals from "../../components/LandingPage/NewArrivals";
import Sale from "../../components/LandingPage/Sale";
import FeatureCollections from "../../components/LandingPage/FeatureCollections";
import Newsletter from "../../components/LandingPage/Newsletter";
import Footer from "../../components/LandingPage/Footer";

// Hooks
import { useLocation } from "react-router-dom";

// State
import { useGlobalStore } from "../../utils/store";

const index: React.FC = () => {
	const location = useLocation();

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

	useEffect(() => {
		if (location.pathname === "/") {
			Update.Global.currentPage("home");
		}
	}, [location]);

	return (
		<main className={styles.LandingPageMain}>
			<Hero />
			<NewArrivals />
			<Sale />
			<FeatureCollections />
			<Newsletter />
			<Footer />
		</main>
	);
};

export default index;
