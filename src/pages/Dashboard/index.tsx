import React, {useEffect} from "react";
import styles from "./Dashboard.module.scss";

// Components or Layouts
import Sidebar from "../../components/Sidebar";
import MainPage from "../../components/MainPage";
import Modal from '../../components/Modal'
import ItemDetails from '../../components/ItemDetails'
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
				<Loading/>
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
