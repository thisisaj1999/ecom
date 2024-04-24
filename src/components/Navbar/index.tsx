import React from "react";
import { Typography } from "antd";
import { useGlobalStore } from "../../utils/store";
import styles from "./Navbar.module.scss";

// Image
import User from "../../assets/user.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";

const index: React.FC = () => {
	const State = {
		globalStore: {
			isSidebarCollapsed: useGlobalStore(
				(state: any) => state.isSidebarCollapsed
			),
		},
	};

	const Update = {
		globalStore: {
			isSidebarCollapsed: useGlobalStore(
				(state: any) => state.setIsSidebarCollapsed
			),
		},
	};

	const toggleCollapsed = () => {
		Update.globalStore.isSidebarCollapsed(
			!State.globalStore.isSidebarCollapsed
		);
	};

	const userMenuItems = [
		{
			key: "1",
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.antgroup.com"
				>
					Categories
				</a>
			),
		},
		{
			key: "2",
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.aliyun.com"
				>
					2nd menu item
				</a>
			),
		},
		{
			key: "3",
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.luohanacademy.com"
				>
					3rd menu item
				</a>
			),
		},
	];

	return (
		<div className={styles.NavbarMain}>
			<div className={styles.NavbarMenuContainer}>
				<Typography.Link href="#API" className={styles.Link}>
					Categories
				</Typography.Link>

				<Typography.Link href="#API" className={styles.Link}>
					Collection
				</Typography.Link>

				<Typography.Link href="#API" className={styles.Link}>
					Store
				</Typography.Link>

				<Typography.Link href="#API" className={styles.Link}>
					Blog
				</Typography.Link>
				<Typography.Link href="#API" className={styles.Link}>
					Find Store
				</Typography.Link>
			</div>

			<div className={styles.NavbarMenuContainer}>
				<Typography.Link href="#API" className={styles.Link}>
					<img src={Search} alt="" width={17} />
					<p>Search</p>
				</Typography.Link>
				<Typography.Link href="#API" className={styles.Link}>
					<img src={Cart} alt="" width={21} />
					<p>Cart(0)</p>
				</Typography.Link>
				<Typography.Link href="#API" className={styles.Link}>
					<img src={User} alt="" width={19} />
					<p>Login</p>
				</Typography.Link>
			</div>
		</div>
	);
};

export default index;
