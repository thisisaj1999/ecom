import styles from "./Sidebar.module.scss";

// ANTD
import { Badge } from 'antd';

// Images
import Bolt from '../../assets/logoblack.svg'
import User from "../../assets/menu/user.svg";
import Cart from "../../assets/menu/cart.svg";
import Order from "../../assets/menu/order.svg";
import Category from "../../assets/menu/category.svg";
import Bike from "../../assets/menu/bike.svg";
import Exercise from "../../assets/menu/exercise.svg";
import Racket from "../../assets/menu/racket.svg";
import Water from "../../assets/menu/water.svg";
import Hiking from "../../assets/menu/hiking.svg";
import Teams from "../../assets/menu/teams.svg";
import Skates from "../../assets/menu/skates.svg";
import Settings from "../../assets/menu/settings.svg";
import Logout from "../../assets/menu/logout.svg";

// Types
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const index = (badge: number) => {
	const items: MenuItem[] = [
		{
			key: "menuLogo",
			label: <p className={styles.MenuMain}><img src={Bolt} alt="Bolt Logo" /></p>,
			type: "group",
			children: [
				{
					key: "all-sports",
					label: "All Sports",
					icon: <img src={Category} alt="" width={20} />,
					children: [
						{
							key: "biking",
							icon: <img src={Bike} alt="" width={22} />,
							label: "Biking",
							children: [
								{ key: "bikes", label: "Bikes" },
								{ key: "bikes-helmet", label: "Bikes Helmet" },
								{ key: "bikes-clothing", label: "Bikes Clothing" },
								{ key: "bikes-footwear", label: "Bikes Footwear" },
								{
									key: "bike-accessories",
									label: "Bike Accessories",
								},
								{
									key: "bikes-maintenance",
									label: "Bikes Maintenance",
								},
							],
						},
						{
							key: "exercise",
							icon: <img src={Exercise} alt="" width={19} />,
							label: "Exercise",
							children: [
								{ key: "combat", label: "Combat" },
								{ key: "fitness", label: "Fitness" },
								{ key: "Yoga-n-Studio", label: "Yoga & Studio" },
								{ key: "dance", label: "Dance" },
								{ key: "gymnastics", label: "Gymnastics" },
							],
						},
						{
							key: "racket-sports",
							icon: <img src={Racket} alt="" width={19} />,
							label: "Racket Sports",
							children: [
								{ key: "table-tennis", label: "Table Tennis" },
								{ key: "badminton", label: "Badminton" },
								{ key: "padel", label: "Padel" },
								{ key: "squash", label: "Squash" },
								{ key: "tennis", label: "Tennis" },
								{ key: "beach-tennis", label: "Beach Tennis" },
							],
						},
						{
							key: "water-sports",
							icon: <img src={Water} alt="" width={20} />,
							label: "Water Sports",
							children: [
								{ key: "kayaking", label: "Kayaking" },
								{ key: "kitesurfing", label: "Kitesurfing" },
								{ key: "sailing", label: "Sailing" },
								{
									key: "snorkeling-n-scubadiving",
									label: "Snorkeling & Scubadiving",
								},
								{
									key: "stand-up-paddle",
									label: "Stand Up Paddle",
								},
								{ key: "surfing", label: "Surfing" },
								{ key: "swimming", label: "Swimming" },
							],
						},
						{
							key: "hiking-camping",
							icon: <img src={Hiking} alt="" width={22} />,
							label: "Hiking & Camping",
							children: [
								{
									key: "hiking-backpacks",
									label: "Hiking Backpacks",
								},
								{
									key: "tents-n-sleeping",
									label: "Tents & Sleeping",
								},
								{ key: "camp-furniture", label: "Camp Furniture" },
								{ key: "camp-kitchen", label: "Camp Kitchen" },
								{ key: "drinking", label: "Drinking" },
								{ key: "lighting", label: "Lighting" },
								{
									key: "hiking-clothing",
									label: "Hiking Clothing",
								},
								{
									key: "hiking-footwear",
									label: "Hiking Footwear",
								},
								{
									key: "hiking-accessories",
									label: "Hiking Accessories",
								},
							],
						},
						{
							key: "team-sports",
							icon: <img src={Teams} alt="" width={22} />,
							label: "Team Sports",
							children: [
								{ key: "football", label: "Football" },
								{ key: "basketball", label: "Basketball" },
								{ key: "volleyball", label: "Volleyball" },
								{ key: "baseball", label: "Baseball" },
								{ key: "rugby", label: "Rugby" },
								{ key: "team-handball", label: "Team Handball" },
							],
						},
						{
							key: "skates-scooters",
							icon: <img src={Skates} alt="" width={20} />,
							label: "Skates & Scooters",
							children: [
								{ key: "roller-skating", label: "Roller Skating" },
								{ key: "scooter", label: "Scooter" },
								{ key: "skateboarding", label: "Skateboarding" },
							],
						},
					],
				},
				{
					key: "brands",
					label: "Brands",
					icon: <img src={Category} alt="" width={20} />,
					children: [
						{ key: "quechua", label: "Quechua" },
						{ key: "nabaiji", label: "Nabaiji" },
						{ key: "pongori", label: "Pongori" },
						{ key: "kipsta", label: "Kipsta" },
						{ key: "btwin", label: "Btwin" },
						{ key: "forclaz", label: "Forclaz" },
						{ key: "triban", label: "Triban" },
					],
				},
				{
					key: "checkout",
					icon: <img src={Cart} alt="" width={22} />,
					label: <div className={styles.CartMenuStyle}>
						<p>Cart</p>
							{badge > 0 && <Badge count={badge} color="green"/>}
						</div>,
				},
				{
					key: "order-history",
					icon: <img src={Order} alt="" width={22} />,
					label: "Order History",
				},
				{
					key: "setting",
					icon: <img src={Settings} alt="" width={24} />,
					label: "Setting",
					children: [
						{
							key: "profile",
							icon: <img src={User} alt="" width={22} />,
							label: "Profile",
						},
						{
							key: "logout",
							icon: <img src={Logout} alt="" width={20} />,
							label: "Logout",
						},
					],
				},
			],
		},
	];

	return items
}

export default index;