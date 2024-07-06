import React from "react";
import styles from "./Summary.module.scss";
import { Card, Divider } from "antd";
import { formatNumberWithCommas } from "../../../utils/services/other";
import { useSummaryStore } from "../../../utils/store";

const index:React.FC = () => {
	
	const State = {
		Summary: {
			subtotal: useSummaryStore((State) => State.subtotal),
			shippingCharge: useSummaryStore((State) => State.shippingCharge),
			total: useSummaryStore((State) => State.total),
		}
	};


	return (
		<Card className={styles.ShowCartItem}>
			<h1 className={styles.ShowCartItemHeading}>Order Summary</h1>
			<Divider />
			<div className={styles.Subtotal}>
				<p>Subtotal :</p>
				<p>{`$${formatNumberWithCommas(State.Summary.subtotal)}`}</p>
			</div>
			<div className={styles.Breakdown}>
				<p>Shipping Charge :</p>
        <p>{`$${formatNumberWithCommas(State.Summary.shippingCharge)}`}</p>
			</div>
			<div className={styles.Total}>
				<p>Total :</p>
        <p>{`$${formatNumberWithCommas(State.Summary.total)}`}</p>
			</div>
		</Card>
	);
};

export default index;
