import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useGlobalStore } from "../../utils/store";
import { useLocation } from "react-router-dom";
import homepageImg from "../../assets/homepageImg.jpg";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { useAuth } from "../../utils/services/authentication";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const index: React.FC = () => {
	const Auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const { enqueueSnackbar } = useSnackbar();

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

	const backgroundImageStyles = {
		filter: "brightness(100%)",
		backgroundImage: `url(${homepageImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "100%",
	};

	const handleShopNowBtn = (e: any) => {
		e.preventDefault();
		if (Auth.User) {
			navigate("/dashboard");
		} else {
			navigate("/login");
			enqueueSnackbar("Please sign in to visit shop", {
				variant: "info",
			});
		}
	};

	const handleSeeAllBtn = (e: any) => {
		e.preventDefault();
		if (Auth.User) {
			navigate("/dashboard");
		} else {
			navigate("/login");
			enqueueSnackbar("Please sign in to visit shop", {
				variant: "info",
			});
		}
	};

	return (
		<main className={styles.LandingPageMain}>
			{/* Hero */}
			<section
				className={styles.HomeContainer}
				style={backgroundImageStyles}
			>
				<Navbar />
				<h1 className={styles.HeroHeading}>Bolt Sport Project</h1>
				<p className={styles.HeroSubHeading}>
					Introducing our latest collection, designed specifically for
					outdoor enthusiasts. Features a range of high-performance
					outwear with a range of bold and vibrant colors and patterns
					to choose from.
				</p>
				<button
					className={styles.HeroShopNowBtn}
					onClick={(e) => handleShopNowBtn(e)}
				>
					Shop Now
				</button>
			</section>

			{/* New Arrivals */}
			<section className={styles.NewArrivalsContainer}>
				<h1 className={styles.NewArrivalsHeading}>New Arrivals</h1>
				<p className={styles.NewArrivalsSubHeading}>
					Our new arrivals are built to withstand your activities
					while keeping you looking your best!
				</p>
				<div className={styles.CardContainerFlex}>
					<div className={styles.CardContainer}>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
				<button
					className={styles.NewArrivalsSeeAllBtn}
					onClick={(e) => handleSeeAllBtn(e)}
				>
					See All
				</button>
			</section>
		</main>
	);
};

export default index;
