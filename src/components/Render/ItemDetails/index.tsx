import React, { useState, useEffect } from "react";
import styles from "./ItemDetails.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Breadcrumb, Button } from "antd";
import { useDashboardStore } from "../../../utils/store";
import Card from "../../Card";
import Tabby from '../../../assets/tabby.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

// Types
import { IItemsData } from "../../../contracts/IItemsData";

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

	const [numItemsToShow, setNumItemsToShow] = useState(3); // Default number of items to show

	useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1440) {
        setNumItemsToShow(5);
      } else if (windowWidth >= 1024) {
        setNumItemsToShow(4);
      }else if (windowWidth >= 768) {
        setNumItemsToShow(3);
      } else {
        setNumItemsToShow(2);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

	const State = {
		Dashboard: {
			itemsData: useDashboardStore((State) => State.itemsData)
		}
	};

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
          <p className={styles.Price}>$89.00</p>
					<div className={styles.Tabby}>
						<span className={styles.TabbyDetails}>4 interest-free payments of <strong>$22.25</strong>.<br/>No fees. Shariah-compliant.</span>
						<img className={styles.TabbySVG} src={Tabby} alt="Tabby Logo" />
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

			<div className={styles.SimilarProducts}>
				<h1 className={styles.Title}>
					Similar Products
				</h1>
				<div className={styles.DashboardSwiper}>
					<Swiper
						slidesPerView={numItemsToShow}
						spaceBetween={numItemsToShow === 6 ? 30 : numItemsToShow === 3 ? 18 : 25}
						freeMode={true}
						speed={1000}
						loop={true}
						grabCursor={true}
						modules={[Autoplay, FreeMode, Navigation]}
					>
						{State.Dashboard.itemsData.map((item:IItemsData) => (
							<SwiperSlide className={styles.DashboardSwiperCards}>
								<Card data={item}/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default index;
