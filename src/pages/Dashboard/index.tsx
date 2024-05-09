import React from "react";
import styles from "./Dashboard.module.scss";
import Sidebar from "../../components/Sidebar";

const index: React.FC = () => {
	return (
		<div className={styles.DashboardMain}>
			<div className={styles.SidebarContainer}>
				<Sidebar />
			</div>
			{/* Pages */}
			<div className={styles.PagesContainer}>
				<p>Dashboard</p>
			</div>
		</div>
	);
};

export default index;
