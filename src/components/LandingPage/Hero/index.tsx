import React from "react";
import styles from "./Hero.module.scss";

// Components or Layouts
import Navbar from "../../Navbar";

// Hooks
import { useAuth } from "../../../utils/services/authentication";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// Images
import homepageImg from "../../../assets/homepageImg.jpg";

const index: React.FC = () => {
	
	const Auth = useAuth();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const backgroundImageStyles = {
		filter: "brightness(100%)",
		backgroundImage: `url(${homepageImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
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

	return (
		<section className={styles.HomeContainer} style={backgroundImageStyles}>
			<Navbar />
			<div className={styles.HeroContentMain}>
				<h1 className={styles.HeroHeading}>Bolt Sport Project</h1>
				<p className={styles.HeroSubHeading}>
					Introducing our latest collection, designed specifically for
					outdoor enthusiasts. Features a range of high-performance
					outwear with a range of bold and vibrant colors and patterns to
					choose from.
				</p>
			</div>
			<button
				className={styles.HeroShopNowBtn}
				onClick={(e) => handleShopNowBtn(e)}
			>
				Shop Now
			</button>
		</section>
	);
};

export default index;
