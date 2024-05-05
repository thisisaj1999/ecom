import React from "react";
import styles from "./FeatureCollections.module.scss";

// Hooks
import { useAuth } from "../../../utils/services/authentication";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// Images
import Accesories from "../../../assets/accesories.jpg";
import Bag from "../../../assets/bag.jpg";
import Bottoms from "../../../assets/bottoms.jpg";
import Footwear from "../../../assets/footwear.jpg";
import Headwear from "../../../assets/headwear.jpg";
import Jacket from "../../../assets/jacket.jpg";

const index: React.FC = () => {
  
	const Auth = useAuth();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

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
		<section className={styles.FeatureCollectionsContainer}>
			<h1 className={styles.FeatureCollectionsHeading}>
				Feature Collections
			</h1>
			<p className={styles.FeatureCollectionsSubHeading}>
				Dare to mix and match! Check our collections to level up your
				fashion game
			</p>
			<div className={styles.FeatureCollectionsGrid}>
				<div className={styles.Footwear}>
					<img src={Footwear} alt="Footwear" />
					<div className={styles.CardContent}>
						<p className={styles.CardContentHeading}>Footwear</p>
						<p className={styles.CardContentSubHeading}>
							Check our cool footwear collections. Get Disc 10% on
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
				<div className={styles.Jacket}>
					<img src={Jacket} alt="Jacket" />
					<div className={styles.CardContent}>
						<p className={styles.CardContentHeading}>Jacket</p>
						<p className={styles.CardContentSubHeading}>
							Check our cool jacket collections. Get Disc 10% on
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
				<div className={styles.Accesories}>
					<img src={Accesories} alt="Accesories" />
					<div className={styles.CardContent}>
						<p className={styles.CardContentHeading}>Accesories</p>
						<p className={styles.CardContentSubHeading}>
							Check our cool accesories collections. Get Disc 10%
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
				<div className={styles.Headwear}>
					<img src={Headwear} alt="Headwear" />
					<div className={styles.CardContent}>
						<p className={styles.CardContentHeading}>Headwear</p>
						<p className={styles.CardContentSubHeading}>
							Check our cool headwear collections. Get Disc 10% on
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
				<div className={styles.Bag}>
					<img src={Bag} alt="Bag" />
					<div className={styles.CardContent}>
						<p className={styles.CardContentHeading}>Bag</p>
						<p className={styles.CardContentSubHeading}>
							Check our cool bag collections. Get Disc 10% on New
							Sseason!
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
							Check our cool bottoms collections. Get Disc 10% on
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
			</div>
		</section>
	);
};

export default index;
