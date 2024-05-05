import React from "react";
import styles from "./Sale.module.scss";

// Hooks
import { useAuth } from "../../../utils/services/authentication";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// Images
import Sale from "../../../assets/sale.jpg";

const index: React.FC = () => {
	
	const Auth = useAuth();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

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
		<section className={styles.SaleContainer}>
			<div className={styles.SaleImageContainer}>
				<img src={Sale} alt="sale image" />
			</div>
			<div className={styles.SaleContentContainer}>
				<h1 className={styles.SaleContentHeading}>
					Find Your Perfect Look at Bolt's Stylish New on Tokyo
				</h1>
				<p className={styles.SaleContentSubHeading}>
					Welcome to the newest Bolt outlet in Shibuya, Japan! Step
					into our stylish and trendy store and discover the latest in
					fashion and apparel. Come and experience the unique and
					vibrant atmosphere.
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
	);
};

export default index;
