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
import Sale from "../../assets/sale.jpg";
import Newsletter from "../../assets/newsletter.jpeg";

// Feature Collection
import Accesories from "../../assets/accesories.jpg";
import Bag from "../../assets/bag.jpg";
import Bottoms from "../../assets/bottoms.jpg";
import Footwear from "../../assets/footwear.jpg";
import Headwear from "../../assets/headwear.jpg";
import Jacket from "../../assets/jacket.jpg";

// Social Logos
import Facebook from "../../assets/social/facebook.svg";
import Instagram from "../../assets/social/instagram.svg";
import Youtube from "../../assets/social/youtube.svg";
import Twitter from "../../assets/social/x.svg";

import Logo from "../../assets/logo.svg";

// ANTD
import type { FormProps } from "antd";
import { Form, Input } from "antd";

type FieldType = {
	email?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
	console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

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

			{/* Newsletter */}
			<section className={styles.NewsletterContainer}>
				<div className={styles.NewsletterImg}>
					<img src={Newsletter} />
					<div className={styles.NewsletterContent}>
						<p className={styles.NewsletterContentHeading}>
							Sign Up to Our Newsletter
						</p>
						<p className={styles.NewsletterContentSubHeading}>
							Get the Latest Beauty Secrets and Trends, Sign Up
							for Our Newsletter and Stay Informed About All
							Things Beauty
						</p>

						{/* Form */}

						<Form
							className={styles.NewsletterFrom}
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item<FieldType>
								name="email"
							>
								<Input />
							</Form.Item>

							<button className={styles.SubmitBtn} type="submit">
								Submit
							</button>
						</Form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<section className={styles.FooterContainer}>
				<div className={styles.FooterLinks}>
					<div className={styles.FooterContainerLeft}>
						<div className={styles.BoltLogo}>
							<img src={Logo} alt="Logo" width={130} />
							<p>
								Experience the Great Outdoors in Style with
								Jolt's. Shop now and gear up for adventure in
								Jolt!
							</p>
						</div>
						<div className={styles.CategoryLinks}>
							<p>Category</p>
							<ul>
								<li>Jackets</li>
								<li>Shirts</li>
								<li>Knit</li>
								<li>T-shirts</li>
								<li>Bottoms</li>
								<li>Accesories</li>
							</ul>
						</div>
						<div className={styles.CustomerCare}>
							<p>Customer Care</p>
							<ul>
								<li>FAQ</li>
								<li>Shipping</li>
								<li>Order Status</li>
								<li>Return & Exchange</li>
							</ul>
						</div>
						<div className={styles.Company}>
							<p>Company</p>
							<ul>
								<li>Privacy</li>
								<li>Guides</li>
								<li>Term of Conditions</li>
							</ul>
						</div>
					</div>

					<div className={styles.FooterContainerRight}>
						<div className={styles.FooterSocialLinks}>
							<div className={styles.FooterSocialLinksTop}>
								<img width={28} src={Facebook} alt="Facebook" />
								<img width={28} src={Instagram} alt="Instagram" />
								<img width={32} src={Youtube} alt="Youtube" />
								<img width={23} src={Twitter} alt="Twitter" />
							</div>
							<div className={styles.FooterSocialLinksBottom}>
								<p>
									Call Us On + 12 332476
								</p>
								<p>
									USD $ | English
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.FooterCopyright}>
					© 2023 Bolt Studio, Inc - All Rights Reserved
				</div>
			</section>
		</main>
	);
};

export default index;
