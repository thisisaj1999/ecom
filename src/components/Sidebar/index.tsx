import React from "react";
import styles from "./Sidebar.module.scss";

import User from '../../assets/menu/user.svg'
import Cart from '../../assets/menu/cart.svg'
import Order from '../../assets/menu/order.svg'
import Category from '../../assets/menu/category.svg'

import Bike from '../../assets/menu/bike.svg'
import Exercise from '../../assets/menu/exercise.svg'
import Racket from '../../assets/menu/racket.svg'
import Water from '../../assets/menu/water.svg'
import Hiking from '../../assets/menu/hiking.svg'
import Teams from '../../assets/menu/teams.svg'
import Skates from '../../assets/menu/skates.svg'




import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
	{
		key: "grp",
		label: <p className={styles.MenuMain}>Menu</p>,
		type: "group",
		children: [
			{
				key: "All_Sports",
				label: "All Sports",
				icon: <img src={Category} alt="" width={20} />,
				children: [
					{
						key: "Biking",
						icon: <img src={Bike} alt="" width={22} />,
						label: "Biking",
						children: [
							{ key: "1", label: "Bikes" },
							{ key: "2", label: "Bikes Helmet" },
							{ key: "3", label: "Bikes Clothing" },
							{ key: "4", label: "Bikes Footwear" },
							{ key: "5", label: "Bike Accessories" },
							{ key: "6", label: "Bikes Maintenance" },
						],
					},
					{
						key: "Exercise",
						icon: <img src={Exercise} alt="" width={19} />,
						label: "Exercise",
						children: [
							{ key: "7", label: "Combat" },
							{ key: "8", label: "Fitness" },
							{ key: "9", label: "Yoga & Studio" },
							{ key: "10", label: "Dance" },
							{ key: "11", label: "Gymnastics" },
						],
					},
					{
						key: "Racket_Sports",
						icon: <img src={Racket} alt="" width={19} />,
						label: "Racket Sports",
						children: [
							{ key: "12", label: "Table Tennis" },
							{ key: "13", label: "Badminton" },
							{ key: "14", label: "Padel" },
							{ key: "15", label: "Squash" },
							{ key: "16", label: "Tennis" },
							{ key: "17", label: "Beach Tennis" },
						],
					},
					{
						key: "Water_Sports",
						icon: <img src={Water} alt="" width={20} />,
						label: "Water Sports",
						children: [
							{ key: "18", label: "Kayaking" },
							{ key: "19", label: "Kitesurfing" },
							{ key: "20", label: "Sailing" },
							{ key: "21", label: "Snorkeling & Scubadiving" },
							{ key: "22", label: "Stand Up Paddle" },
							{ key: "23", label: "Surfing" },
							{ key: "24", label: "Swimming" },
							{ key: "25", label: "Beach Tennis" },
						],
					},
					{
						key: "Hiking_Camping",
						icon: <img src={Hiking} alt="" width={22} />,
						label: "Hiking & Camping",
						children: [
							{ key: "26", label: "Hiking Backpacks" },
							{ key: "27", label: "Tents & Sleeping" },
							{ key: "28", label: "Camp Furniture" },
							{ key: "29", label: "Camp Kitchen" },
							{ key: "30", label: "Drinking" },
							{ key: "31", label: "Lighting" },
							{ key: "32", label: "Hiking Clothing" },
							{ key: "33", label: "Hiking Footwear" },
							{ key: "34", label: "Hiking Accessories" },
						],
					},
					{
						key: "Team_Sports",
						icon: <img src={Teams} alt="" width={22} />,
						label: "Team Sports",
						children: [
							{ key: "35", label: "Football" },
							{ key: "36", label: "Basketball" },
							{ key: "37", label: "Volleyball" },
							{ key: "38", label: "Baseball" },
							{ key: "39", label: "Rugby" },
							{ key: "40", label: "Team Handball" },
						],
					},
					{
						key: "Skates_Scooters",
						icon: <img src={Skates} alt="" width={20} />,
						label: "Skates & Scooters",
						children: [
							{ key: "41", label: "Roller Skating" },
							{ key: "42", label: "Scooter" },
							{ key: "43", label: "Skateboarding" },
						],
					},
				],
			},
			{
				key: "Brands",
				label: "Brands",
				icon: <img src={Category} alt="" width={20} />,
				children: [
					{ key: "44", label: "Quechua" },
					{ key: "45", label: "Nabaiji" },
					{ key: "46", label: "Pongori" },
					{ key: "47", label: "Kipsta" },
					{ key: "48", label: "Btwin" },
					{ key: "49", label: "Forclaz" },
					{ key: "50", label: "Triban" }
				],
			},
			{ key: "51", icon: <img src={Cart} alt="" width={22}/>, label: "Cart" },
			{ key: "52", icon: <img src={Order} alt="" width={22}/>, label: "Order History" },
			{ key: "53", icon: <img src={User} alt="" width={22}/>, label: "Account" },
		],
	},
];

const index: React.FC = () => {
	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e);
	};

	return (
		<div className={styles.SidebarMain}>
			<Menu
				onClick={onClick}
				className={styles.MenuCustomStyles}
				style={{ width: 256 }}
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode="inline"
				items={items}
			/>
		</div>
	);
};

export default index;
