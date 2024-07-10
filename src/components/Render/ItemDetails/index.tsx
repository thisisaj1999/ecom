import React from "react";
import styles from "./ItemDetails.module.scss";
import { Breadcrumb, Button } from "antd";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImagesData = [
	{
		img: "https://decathlon.ae/cdn/shop/products/f82bd31c112ba5818ef0bbdb115d34ba_422x.progressive.jpg?v=1673068742",
	},
	{
		img: "https://decathlon.ae/cdn/shop/products/2a0a57db43c9d5f6d1f5c1e1329f9ff1_422x.progressive.jpg?v=1673068742",
	},
	{
		img: "https://decathlon.ae/cdn/shop/products/7b0b7f8246616805ff60d9532d597bf3_422x.progressive.jpg?v=1673068742",
	},

]


const index: React.FC = () => {
	return (
		<div className={styles.ProductMainPage}>
			<Breadcrumb
				separator=">"
				items={[
					{
						title: "Home",
					},
					{
						title: "Application Center",
						href: "",
					},
					{
						title: "Application List",
						href: "",
					},
					{
						title: "An Application",
					},
				]}
			/>

			<div className={styles.ProductContainer}>
				<div className={styles.ProductImage}>
					{ImagesData.map(image => (
						<div className={styles.ImageBorder}>
							<img className={styles.Image} src={image.img} alt="img" />
						</div>
					))}
				</div>
				<div className={styles.ProductDetails}>
					<h1 className={styles.Title}>
						POOL MASK SWIMDOW - CLEAR LENS - KIDS' SIZE - BLUE
						YELLOW
					</h1>
          <p className={styles.Price}>Dhs. 89.00</p>
					<div className={styles.Tabby}>
						<span className={styles.TabbyDetails}>4 interest-free payments of <strong>AED 22.25</strong>. No fees. Shariah-compliant.</span>
						<span>test</span>
					</div>
					<p className={styles.Description}>
						Our design teams have developed this swimming mask for
						beginner swimmers wanting to get into swimming, indoors
						or outdoors.
					</p>
					<p className={styles.Description}>
						Tired of not being able to see clearly underwater? This
						model offers you a wide field of view as well as an
						adjustable rear strap to adjust it as you wish.
					</p>
					<p className={styles.color}>Color: Default</p>
					<div className={styles.OptionsMain}>
						<div className={styles.Option}>
							<img src="https://decathlon.ae/cdn/shop/products/7b0b7f8246616805ff60d9532d597bf3_422x.progressive.jpg?v=1673068742" alt="" />
						</div>
						<div className={styles.Option}>
							<img src="https://decathlon.ae/cdn/shop/products/7b0b7f8246616805ff60d9532d597bf3_422x.progressive.jpg?v=1673068742" alt="" />
						</div>
					</div>
					<p className={styles.size}>Size: Unique Size</p>
					<Button className={styles.AddToCartBtn} type="primary">Add to cart</Button>
				</div>
			</div>
		</div>
	);
};

export default index;
