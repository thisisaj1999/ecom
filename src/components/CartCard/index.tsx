import React from "react";
import styles from "./CartCard.module.scss";
import { Card, Select, Divider } from "antd";

const index: React.FC = () => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<div className={styles.CartItemsStyles}>
			<Card>
				<div className={styles.CartItemImage}>
					<img
						src={`https://decathlon.ae/cdn/shop/products/da411eb9efdc9b140a8ab5c1e2bf2dc4_422x.progressive.jpg?v=1709259411`}
						alt=""
					/>
				</div>
				<div className={styles.CartItemContent}>
					<div className={styles.CartItemDetails}>
						<p className={styles.CartItemName}>
							FOAM SURFBOARD 100 7'. SUPPLIED WITH A LEASH AND 3
							FINS.
						</p>
						<p className={styles.CartItemPrice}>
							565{" "}
							<span className={styles.CartItemCurrency}>AED</span>
						</p>
					</div>
					<div className={styles.CartItemOptions}>
						<div className={styles.CartItemQuantity}>
							<p>Quantity:</p>
							<Select
								defaultValue="1"
								style={{ width: 60 }}
								onChange={handleChange}
								options={[
									{ value: "1", label: "1" },
									{ value: "2", label: "2" },
									{ value: "3", label: "3" },
									{ value: "4", label: "4" },
									{ value: "5", label: "5" },
									{ value: "6", label: "6" },
									{ value: "7", label: "7" },
									{ value: "8", label: "8" },
									{ value: "9", label: "9" },
									{ value: "10", label: "10" },
								]}
							/>
						</div>
						<Divider type="vertical" style={{ height: "70%" }} />
						<p className={styles.CartItemSave}>Save For Later</p>
						<Divider type="vertical" style={{ height: "70%" }} />
						<p className={styles.CartItemDelete}>Delete</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default index;
