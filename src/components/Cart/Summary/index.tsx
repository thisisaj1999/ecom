import React from "react";
import styles from "./Summary.module.scss";
import { Card, Divider } from "antd";
import { formatNumberWithCommas } from "../../../utils/services/other";

const index:React.FC = () => {
	return (
		<Card className={styles.ShowCartItem}>
			<h1 className={styles.ShowCartItemHeading}>Order Summary</h1>
			<Divider />
			<div className={styles.Subtotal}>
				<p>Subtotal :</p>
				<p>{`$${formatNumberWithCommas(200)}`}</p>
			</div>
			<div className={styles.Breakdown}>
				<p>Shipping Charge :</p>
        <p>{`$${formatNumberWithCommas(10)}`}</p>
			</div>
			<div className={styles.Total}>
				<p>Total :</p>
        <p>{`$${formatNumberWithCommas(210)}`}</p>
			</div>
		</Card>
	);
};

export default index;
