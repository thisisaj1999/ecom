import React from "react";
import styles from "./Products.module.scss";
import { Card, Select, Divider } from "antd";
import { IItemsData } from "../../../contracts/IItemsData";
import { removeFromCartFn } from "../../../utils/services/other";
import { useAuth } from "../../../utils/services/authentication";
import { useDashboardStore } from "../../../utils/store";

interface ItemProps {
  item: IItemsData;
}

const index: React.FC<ItemProps> = ({ item }) => {

	const State = {
		Dashboard: {
			cartItemsLength: useDashboardStore((State) => State.cartItemsLength)
		},
	};

	const Update = {
		Dashboard: {
			cartItemsLength: useDashboardStore((State) => State.setCartItemsLength)
		},
	};

	const Auth = useAuth();
	const Uid = Auth.User?.uid

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const handleRemoveFromCart = () => {
		removeFromCartFn(item, Uid)
		if(State.Dashboard.cartItemsLength > 0){
			Update.Dashboard.cartItemsLength(State.Dashboard.cartItemsLength - 1)	
		}
	}

	return (
		<div className={styles.CartItemsStyles}>
			<Card>
				<div className={styles.CartItemImage}>
					<img
						src={item?.images[0]}
						alt=""
					/>
				</div>
				<div className={styles.CartItemContent}>
					<div className={styles.CartItemDetails}>
						<p className={styles.CartItemName}>
							{item?.title}
						</p>
						<p className={styles.CartItemPrice}>
							{item?.price}{" "}
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
						<p className={styles.CartItemDelete} onClick={handleRemoveFromCart}>Delete</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default index;
