import React, {useEffect} from "react";
import styles from "./Dashboard.module.scss";
import Sidebar from "../../components/Sidebar";
import MainPage from "../../components/MainPage";
import { useLocation } from "react-router-dom";
import { useGlobalStore } from "../../utils/store";

const index: React.FC = () => {

	const location = useLocation()
  
	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage),
		},
	};

  useEffect(()=>{
    if(location.pathname === '/dashboard'){
      Update.Global.currentPage('dashboard')
    }
  },[location])

	return (
		<div className={styles.DashboardMain}>
			<div className={styles.SidebarContainer}>
				<Sidebar />
			</div>
			{/* Pages */}
			<div className={styles.PagesContainer}>
				<MainPage />
			</div>
		</div>
	);
};

export default index;
