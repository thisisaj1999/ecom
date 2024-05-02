import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { useGlobalStore } from "../../utils/store";
import { useLocation } from "react-router-dom";
import homepageImg from "../../assets/homepageImg.jpg";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import { useAuth } from "../../utils/services/authentication";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Sale from "../../assets/sale.jpg";

// Feature Collection
import Accesories from "../../assets/accesories.jpg";
import Bag from "../../assets/bag.jpg";
import Bottoms from "../../assets/bottoms.jpg";
import Footwear from "../../assets/footwear.jpg";
import Headwear from "../../assets/headwear.jpg";
import Jacket from "../../assets/jacket.jpg";

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

	const handleDiscoverBtn = (e: any) => {
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
						<p className={styles.SaleFlashBatchHeading}>
							Come and Enjoy Sale!
						</p>
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

			{/* Feature Collections */}
			<section className={styles.FeatureCollectionsContainer}>
				<h1 className={styles.FeatureCollectionsHeading}>
					Feature Collections
				</h1>
				<p className={styles.FeatureCollectionsSubHeading}>
					Dare to mix and match! Check our collections to level up
					your fashion game
				</p>
				<div className={styles.FeatureCollectionsGrid}>
					<div className={styles.Footwear}>
						<img src={Footwear} alt="Footwear" />
						<div className={styles.CardContent}>
							<p className={styles.CardContentHeading}>
								Footwear
							</p>
							<p className={styles.CardContentSubHeading}>
								Check our cool footwear collections. Get Disc
								10% on New Sseason!
							</p>
							<button
								className={styles.DiscoverBtn}
								onClick={(e) => handleDiscoverBtn(e)}
							>
								Discover
							</button>
						</div>
					</div>
					<div className={styles.Jacket}>
						<img src={Jacket} alt="Jacket" />
						<div className={styles.CardContent}>
							<p className={styles.CardContentHeading}>Jacket</p>
							<p className={styles.CardContentSubHeading}>
								Check our cool jacket collections. Get Disc 10%
								on New Sseason!
							</p>
							<button
								className={styles.DiscoverBtn}
								onClick={(e) => handleDiscoverBtn(e)}
							>
								Discover
							</button>
						</div>
					</div>
					<div className={styles.Accesories}>
						<img src={Accesories} alt="Accesories" />
						<div className={styles.CardContent}>
							<p className={styles.CardContentHeading}>
								Accesories
							</p>
							<p className={styles.CardContentSubHeading}>
								Check our cool accesories collections. Get Disc
								10% on New Sseason!
							</p>
							<button
								className={styles.DiscoverBtn}
								onClick={(e) => handleDiscoverBtn(e)}
							>
								Discover
							</button>
						</div>
					</div>
					<div className={styles.Headwear}>
						<img src={Headwear} alt="Headwear" />
						<div className={styles.CardContent}>
							<p className={styles.CardContentHeading}>
								Headwear
							</p>
							<p className={styles.CardContentSubHeading}>
								Check our cool headwear collections. Get Disc
								10% on New Sseason!
							</p>
							<button
								className={styles.DiscoverBtn}
								onClick={(e) => handleDiscoverBtn(e)}
							>
								Discover
							</button>
						</div>
					</div>
					<div className={styles.Bag}>
						<img src={Bag} alt="Bag" />
						<div className={styles.CardContent}>
							<p className={styles.CardContentHeading}>Bag</p>
							<p className={styles.CardContentSubHeading}>
								Check our cool bag collections. Get Disc 10% on
								New Sseason!
							</p>
							<button
								className={styles.DiscoverBtn}
								onClick={(e) => handleDiscoverBtn(e)}
							>
								Discover
							</button>
						</div>
					</div>
					<div className={styles.Bottoms}>
						<img src={Bottoms} alt="Bottoms" />
						<div className={styles.CardContent}>
							<p className={styles.CardContentHeading}>Bottoms</p>
							<p className={styles.CardContentSubHeading}>
								Check our cool bottoms collections. Get Disc 10%
								on New Sseason!
							</p>
							<button
								className={styles.DiscoverBtn}
								onClick={(e) => handleDiscoverBtn(e)}
							>
								Discover
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default index;
