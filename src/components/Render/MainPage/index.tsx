import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGlobalStore, useDashboardStore } from "../../../utils/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./MainPage.module.scss";
import Card from "../../Card";


// Carousel Images
import Img1 from "../../../assets/carousel/img1.avif";
import Img2 from "../../../assets/carousel/img2.avif";
import Img3 from "../../../assets/carousel/img3.avif";
import Img4 from "../../../assets/carousel/img4.avif";
import Img5 from "../../../assets/carousel/img5.avif";
import Img6 from "../../../assets/carousel/img6.avif";
import Img7 from "../../../assets/carousel/img7.avif";
import Img8 from "../../../assets/carousel/img8.avif";
import Img9 from "../../../assets/carousel/img9.avif";
import Img10 from "../../../assets/carousel/img10.avif";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { slugToWords } from "../../../utils/services/other";

// Types
import { IItemsData } from "../../../contracts/IItemsData";


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
		Global: {
			currentPage: useGlobalStore((State) => State.currentPage),
		},
		Dashboard: {
			itemsData: useDashboardStore((State) => State.itemsData)
		}
	};


	return (
		<div className={styles.DashboardMainPage}>
      <div className={styles.DashboardCarousel}>
        <Swiper
          direction={"vertical"}
          loop={true}
					grabCursor={true}
					speed={1200}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src={Img1} alt="Img1" /></SwiperSlide>
          <SwiperSlide><img src={Img2} alt="Img2" /></SwiperSlide>
          <SwiperSlide><img src={Img3} alt="Img3" /></SwiperSlide>
          <SwiperSlide><img src={Img4} alt="Img4" /></SwiperSlide>
          <SwiperSlide><img src={Img5} alt="Img5" /></SwiperSlide>
          <SwiperSlide><img src={Img6} alt="Img6" /></SwiperSlide>
          <SwiperSlide><img src={Img7} alt="Img7" /></SwiperSlide>
          <SwiperSlide><img src={Img8} alt="Img8" /></SwiperSlide>
          <SwiperSlide><img src={Img9} alt="Img9" /></SwiperSlide>
          <SwiperSlide><img src={Img10} alt="Img10" /></SwiperSlide>
        </Swiper>
      </div>
			<h1 className={styles.DashboardMainHeading}>
				{State.Global.currentPage !== 'dashboard' ? slugToWords(State.Global.currentPage) : 'Popular'}
			</h1>
			<div className={styles.DashboardSwiper}>
				<Swiper
					slidesPerView={numItemsToShow}
					spaceBetween={numItemsToShow === 6 ? 30 : numItemsToShow === 3 ? 18 : 25}
					freeMode={true}
					speed={1000}
					loop={true}
					grabCursor={true}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false,
					}}
					// navigation={true}
					modules={[Autoplay, FreeMode, Navigation]}
				>
					{State.Dashboard.itemsData.map((item:IItemsData) => (
						<SwiperSlide className={styles.DashboardSwiperCards}>
							<Card data={item}/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<h1 className={styles.DashboardMainHeading}>
				{State.Global.currentPage !== 'dashboard' ? slugToWords(State.Global.currentPage) : 'Best Sellers'}
			</h1>
			<div className={styles.DashboardSwiper}>
				<Swiper
					slidesPerView={numItemsToShow}
					spaceBetween={numItemsToShow === 6 ? 30 : numItemsToShow === 3 ? 18 : 25}
					speed={1000}
					freeMode={true}
					loop={true}
					grabCursor={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					// navigation={true}
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
	);
};

export default index;
