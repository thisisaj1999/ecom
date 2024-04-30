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
import Sale from "../../assets/Sale.jpg";

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

	const handleSeeOnMapBtn = (e: any) => {
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

			{/* Sale */}
			<section className={styles.SaleContainer}>
				<div className={styles.SaleImageContainer}>
					<img src={Sale} alt="sale image" />
				</div>
				<div className={styles.SaleContentContainer}>
					<h1 className={styles.SaleContentHeading}>
						Find Your Perfect Look at Bolt's Stylish New on Tokyo
					</h1>
					<p className={styles.SaleContentSubHeading}>
						Welcome to the newest Bolt outlet in Shibuya, Japan!
						Step into our stylish and trendy store and discover the
						latest in fashion and apparel. Come and experience the
						unique and vibrant atmosphere.
					</p>
					<div className={styles.SaleFlashBatch}>
						<p className={styles.SaleFlashBatchHeading}>Come and Enjoy Sale!</p>
						<h1 className={styles.SaleFlashBatchPercentage}>50%</h1>
					</div>
					<button
						className={styles.SeeOnMapsBtn}
						onClick={(e) => handleSeeOnMapBtn(e)}
					>
						See On Maps
					</button>
				</div>
			</section>
		</main>
	);
};

export default index;
