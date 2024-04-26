import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { useGlobalStore } from "../../utils/store";
import { useLocation } from "react-router-dom";
import homepageImg from "../../assets/homepageImg.jpg";
import Navbar from "../../components/Navbar";
import {useAuth} from '../../utils/services/authentication'
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

const index: React.FC = () => {

  const Auth = useAuth()
  const navigate = useNavigate();
	const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

	useEffect(() => {
		if (location.pathname === "/") {
			Update.Global.currentPage("home");
		}
	}, [location]);

	const backgroundImageStyles = {
		filter: "brightness(100%)",
		backgroundImage: `url(${homepageImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		width: "100%",
	};

  const handleShopNowBtn = (e:any) => {
    e.preventDefault()
    if(Auth.User) {
      navigate('/dashboard')
    }else{
      navigate('/login')
      enqueueSnackbar("Please sign in to visit shop", { variant: 'info' });
    }
  }

	return (
		<div className={styles.HomeContainer} style={backgroundImageStyles}>
			<Navbar />
			<h1 className={styles.HeroHeading}>Bolt Sport Project</h1>
			<p className={styles.HeroSubHeading}>
				Introducing our latest collection, designed specifically for
				outdoor enthusiasts. Features a range of high-performance
				outwear with a range of bold and vibrant colors and patterns to
				choose from.
			</p>
			<button className={styles.HeroShopNowBtn} onClick={(e) => handleShopNowBtn(e)}>Shop Now</button>
		</div>
	);
};

export default index;
