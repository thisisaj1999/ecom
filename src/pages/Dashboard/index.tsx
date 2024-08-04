import React, {useEffect} from "react";
import styles from "./Dashboard.module.scss";

// Components or Layouts
import Sidebar from "../../components/Sidebar";
import { ItemDetails, MainPage, ProductsList } from "../../components/Render";
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
import Order from "../Order";
import Checkout from "../Checkout";

// Hooks
import { useLocation } from "react-router-dom";

// State
import { useGlobalStore } from "../../utils/store";

const index: React.FC = () => {

	const location = useLocation()
  
	const State = {
		Global: {
			isLoading: useGlobalStore((State) => State.isLoading)
		}
	}

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

  useEffect(()=>{
    if(location.pathname === '/dashboard'){
      Update.Global.currentPage('dashboard')
    } else if(location.pathname === '/product') {
			Update.Global.currentPage('product')
    } else if(location.pathname === '/order-history') {
			Update.Global.currentPage('order-history')
		}
  },[location])


	const renderComponent = () => {
		if (location.pathname === '/dashboard') {
			return <MainPage />;
		} else if (location.pathname === '/order-history') {
			return <Order />;
		} else if (location.pathname === '/checkout') {
			return <Checkout />;
		} else if (location.pathname.startsWith('/product/')) {
			return <ItemDetails />;
		} else if (location.pathname.startsWith('/all-sports/') || location.pathname.startsWith('/brands/')) {
			return <ProductsList />;
		} else {
			return <MainPage />;
		}
	};


	return (
		<div className={styles.DashboardMain}>
			{State.Global.isLoading ? 
			(
				<Loading height="100%" width="12rem"/>
			) : (
				<>
					<div className={styles.SidebarContainer}>
						<Sidebar />
					</div>
					{/* Pages */}
					<div className={styles.PagesContainer}>
						{renderComponent()}
						<Modal />
					</div>
				</>
			)}
		</div>
	);
};

export default index;
