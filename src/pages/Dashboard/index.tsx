import React, {useEffect} from "react";
import styles from "./Dashboard.module.scss";

// Components or Layouts
import Sidebar from "../../components/Sidebar";
import { ItemDetails, MainPage } from "../../components/Render";
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
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
    }else if(location.pathname === '/product')
			Update.Global.currentPage('product')
  },[location])

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
						{location.pathname === '/dashboard' ? <MainPage/> : <ItemDetails/>}
						<Modal />
					</div>
				</>
			)}
		</div>
	);
};

export default index;
