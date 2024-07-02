import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { Card, Select, Divider } from "antd";
import { IItemsData } from "../../../contracts/IItemsData";
import { formatNumberWithCommas, getCartItems, removeFromCartFn } from "../../../utils/services/other";
import { useAuth } from "../../../utils/services/authentication";
import { useDashboardStore } from "../../../utils/store";
import Loading from '../../Loading'

interface ItemProps {
	cartItems: IItemsData[];
}

const index: React.FC<ItemProps> = ({cartItems}) => {

	const [cartItemsState, setCartItemsState] = useState<IItemsData[]>([...cartItems]);

	const State = {
		Dashboard: {
			cartItemsLength: useDashboardStore(
				(State) => State.cartItemsLength
			),
		},
	};

	const Update = {
		Dashboard: {
			cartItemsLength: useDashboardStore(
				(State) => State.setCartItemsLength
			),
		},
	};

	const Auth = useAuth();
	const Uid = Auth.User?.uid;

	useEffect(() => {
		if(State.Dashboard.cartItemsLength > 0){
			const fetchedItems = getCartItems(Uid)
			if(fetchedItems){
				setCartItemsState(fetchedItems)
			}
		}
	},[ , State.Dashboard.cartItemsLength])

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const handleRemoveFromCart = (item: IItemsData) => {
		removeFromCartFn(item, Uid);
		if (State.Dashboard.cartItemsLength > 0) {
			Update.Dashboard.cartItemsLength(
				State.Dashboard.cartItemsLength - 1
			);
		}
	};

	return (
		cartItemsState.length > 0 ?
		(
			<div className={styles.ShowcaseProducts}>
				<div className={styles.CartItemsMain} >
					{cartItemsState?.map((item, index) => {
							return (
								<div className={styles.CartItemsStyles} key={index}>
									<Card>
										<div className={styles.CartItemImage}>
											<img src={item?.images[0]} alt="" />
										</div>
										<div className={styles.CartItemContent}>
											<div className={styles.CartItemDetails}>
												<p className={styles.CartItemName}>
													{item?.title}
												</p>
												<p className={styles.CartItemPrice}>
													{'$'}{formatNumberWithCommas(item?.price)}{" "}
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
												<Divider
													type="vertical"
													style={{ height: "70%" }}
												/>
												<p className={styles.CartItemSave}>
													Save For Later
												</p>
												<Divider
													type="vertical"
													style={{ height: "70%" }}
												/>
												<p
													className={styles.CartItemDelete}
													onClick={() => handleRemoveFromCart(item)}
												>
													Delete
												</p>
											</div>
										</div>
									</Card>
								</div>
							);
						})
					}
				</div>

				<Card className={styles.ShowCartItem}>
					<h1 className={styles.ShowCartItemHeading}>Order Summary</h1>
					<Divider />
					<div className={styles.Subtotal}>
						<p>Subtotal :</p>
						<p>200$</p>
					</div>
					<div className={styles.Breakdown}>
						<p>Shipping Charge :</p>
						<p>10$</p>
					</div>
					<div className={styles.Total}>
						<p>Total :</p>
						<p>210$</p>
					</div>
				</Card>
			</div>
		) : (
			<div className={styles.LoadingStyles}>
				<Loading height="30rem" width="10rem"/>
			</div>
		)
	);
};

export default index;
