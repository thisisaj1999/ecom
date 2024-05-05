import React from "react";
import styles from "./NewArrivals.module.scss";

// Components or Layouts
import Card from "../../Card";

// Hooks
import { useAuth } from "../../../utils/services/authentication";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const index: React.FC = () => {
	
	const Auth = useAuth();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

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
		<section className={styles.NewArrivalsContainer}>
			<h1 className={styles.NewArrivalsHeading}>New Arrivals</h1>
			<p className={styles.NewArrivalsSubHeading}>
				Our new arrivals are built to withstand your activities while
				keeping you looking your best!
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
	);
};

export default index;
