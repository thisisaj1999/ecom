import React from "react";
import styles from "./ItemDetails.module.scss";
import { Breadcrumb } from "antd";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
					<Swiper
						// direction={"hori"}
						grabCursor={true}
						speed={1200}
						className="mySwiper"
					>
						<SwiperSlide>
							<img
								src={`https://decathlon.ae/cdn/shop/products/f82bd31c112ba5818ef0bbdb115d34ba_422x.progressive.jpg?v=1673068742`}
								alt="Img1"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={`https://decathlon.ae/cdn/shop/products/1eb8724fbb250b79249ac0617df36686_422x.progressive.jpg?v=1673068742`}
								alt="Img2"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={`https://decathlon.ae/cdn/shop/products/2a0a57db43c9d5f6d1f5c1e1329f9ff1_422x.progressive.jpg?v=1673068742`}
								alt="Img3"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={`https://decathlon.ae/cdn/shop/products/7b0b7f8246616805ff60d9532d597bf3_422x.progressive.jpg?v=1673068742`}
								alt="Img4"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className={styles.ProductDetails}>
					<p>
						POOL MASK SWIMDOW - CLEAR LENS - KIDS' SIZE - BLUE
						YELLOW
					</p>
          <p>89 AED</p>
					<p>
						Our design teams have developed this swimming mask for
						beginner swimmers wanting to get into swimming, indoors
						or outdoors.
						<br />
						Tired of not being able to see clearly underwater? This
						model offers you a wide field of view as well as an
						adjustable rear strap to adjust it as you wish.
					</p>
				</div>
			</div>
		</div>
	);
};

export default index;
