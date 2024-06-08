import React, { useState } from "react";
import styles from "./Card.module.scss";

import { Tooltip } from "antd";

// Types
import { IItemsData } from "../../contracts/IItemsData";

interface ItemProps {
  data: IItemsData;
}

const index: React.FC<ItemProps> = ({ data }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [addToCart, setAddToCart] = useState(false);

	const LikeButtonHandler = () => {
		setIsLiked(!isLiked);
	};

	const addToCartHandler = () => {
		setAddToCart(!addToCart);
	};

	return (
		<div className={styles.CardMain}>
			<div className={styles.Card}>
				<img src={data?.images[0]} alt="" className={styles.ProductImg} />
				<div className={styles.LikeBtn}>
					<svg
						className={styles.Like}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={LikeButtonHandler}
					>
						<path
							d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
							stroke={`${isLiked ? "red" : "#000"}`}
							fill={`${isLiked && "red"}`}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className={styles.CardContent}>
					<div>
						<p className={styles.CardProductName}>
							<Tooltip placement="topLeft" title={data?.title}>
								{data?.title}
							</Tooltip>
						</p>
						<p className={styles.CardProductPrice}>{`$ ${data?.price}`}</p>
					</div>
					<div
						className={styles.addToCartBtn}
						onClick={addToCartHandler}
						style={{
							backgroundColor: addToCart ? "#000" : "#fff",
						}}
					>
						<svg
							width={22}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
								stroke={`${addToCart ? "#ffffff" : "#000000"}`}
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
