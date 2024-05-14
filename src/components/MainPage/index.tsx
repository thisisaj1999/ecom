import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGlobalStore } from "../../utils/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./MainPage.module.scss";
import Card from "../Card";


// Carousel Images
import Img1 from "../../assets/carousel/img1.avif";
import Img2 from "../../assets/carousel/img2.avif";
import Img3 from "../../assets/carousel/img3.avif";
import Img4 from "../../assets/carousel/img4.avif";
import Img5 from "../../assets/carousel/img5.avif";
import Img6 from "../../assets/carousel/img6.avif";
import Img7 from "../../assets/carousel/img7.avif";
import Img8 from "../../assets/carousel/img8.avif";
import Img9 from "../../assets/carousel/img9.avif";
import Img10 from "../../assets/carousel/img10.avif";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { slugToWords } from "../../utils/services/other";

const index: React.FC = () => {
	const State = {
		Global: {
			currentPage: useGlobalStore((State) => State.currentPage),
		},
	};

	return (
		<div className={styles.DashboardMain}>
      <div className={styles.DashboardCarousel}>
        <Swiper
          direction={"vertical"}
          loop={true}
					grabCursor={true}
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
				{slugToWords(State.Global.currentPage)}
			</h1>
			<div className={styles.DashboardSwiper}>
				<Swiper
					slidesPerView={5}
					spaceBetween={25}
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
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
					<SwiperSlide className={styles.DashboardSwiperCards}>
						<Card />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default index;
