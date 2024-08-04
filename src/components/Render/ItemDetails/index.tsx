import React, { useState, useEffect } from "react";
import styles from "./ItemDetails.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Breadcrumb, Button } from "antd";
import { useDashboardStore } from "../../../utils/store";
import Card from "../../Card";
import Tabby from "../../../assets/tabby.svg";
import Loading from "../../Loading"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

// Types
import { IItemsData } from "../../../contracts/IItemsData";
import { useParams } from "react-router-dom";
import { getItemByID } from "../../../utils/services/requests";


const index: React.FC = () => {
	const params = useParams();
	const [itemData, setItemData] = useState<IItemsData | null>(null);
	const [numItemsToShow, setNumItemsToShow] = useState(3); // Default number of items to show

	useEffect(() => {
		const fetchItem = async () => {
			const productId = params?.productId;

			if (productId) {
				try {
					const item = await getItemByID(productId);
					setItemData(item);
				} catch (error) {
					console.error("Error fetching item:", error);
				}
			} else {
				console.error("Product ID is undefined");
			}
		};
		fetchItem();
	}, [params?.productId]);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 1440) {
				setNumItemsToShow(5);
			} else if (windowWidth >= 1024) {
				setNumItemsToShow(4);
			} else if (windowWidth >= 768) {
				setNumItemsToShow(3);
			} else {
				setNumItemsToShow(2);
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const State = {
		Dashboard: {
			itemsData: useDashboardStore((State) => State.itemsData),
		},
	};

	return itemData ? (
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
					{itemData?.images?.map((image) => {
						return (
							<div className={styles.ImageBorder}>
								<img
									className={styles.Image}
									src={image}
									alt="img"
								/>
							</div>
						)
					})}
				</div>
				<div className={styles.ProductDetails}>
					<h1 className={styles.Title}>
						{itemData?.title}
					</h1>
					<p className={styles.Price}>${itemData?.price}.00</p>
					<div className={styles.Tabby}>
						<span className={styles.TabbyDetails}>
							4 interest-free payments of <strong>${itemData?.price / 4}</strong>.
							<br />
							No fees. Shariah-compliant.
						</span>
						<img
							className={styles.TabbySVG}
							src={Tabby}
							alt="Tabby Logo"
						/>
					</div>
					<p 
						className={styles.Description} 
						dangerouslySetInnerHTML={{ __html: itemData?.description || '' }}
					/>
					<p className={styles.color}>Color: Default</p>
					<div className={styles.OptionsMain}>
						<div className={styles.Option}>
							<img
								src={itemData?.images[0]}
								alt=""
							/>
						</div>
						<div className={styles.Option}>
							<img
								src={itemData?.images[0]}
								alt=""
							/>
						</div>
					</div>
					<p className={styles.size}>Size: Unique Size</p>
					<Button className={styles.AddToCartBtn} type="primary">
						Add to cart
					</Button>
				</div>
			</div>

			<div className={styles.SimilarProducts}>
				<h1 className={styles.Title}>Similar Products</h1>
				<div className={styles.DashboardSwiper}>
					<Swiper
						slidesPerView={numItemsToShow}
						spaceBetween={
							numItemsToShow === 6
								? 30
								: numItemsToShow === 3
								? 18
								: 25
						}
						freeMode={true}
						speed={1000}
						loop={true}
						grabCursor={true}
						modules={[Autoplay, FreeMode, Navigation]}
					>
						{State.Dashboard.itemsData.map((item: IItemsData) => (
							<SwiperSlide
								className={styles.DashboardSwiperCards}
							>
								<Card data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	) : (
		<Loading height="100vh" width="10rem"/>
	);
};

export default index;
