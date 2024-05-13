import React from "react";
import styles from "./Navbar.module.scss";

// ANTD
import { Typography } from "antd";

// Hooks
import { useAuth } from "../../utils/services/authentication";
import { useNavigate } from "react-router-dom";

// Image
import User from "../../assets/user.svg";
import Cart from "../../assets/cart.svg";
import Logo from "../../assets/logo.svg";
import Menu from '../../assets/menu.svg'

// State
import { useGlobalStore } from "../../utils/store";

const index: React.FC = () => {
	const Auth = useAuth();
	const navigate = useNavigate();

	const Update = {
		Global: {
			isDrawerOpen: useGlobalStore((State) => State.setIsDrawerOpen),
		},
	};

	const SignOutBtn = async () => {
		await Auth.SignOut();
	};

	const SignInBtn = async () => {
		navigate("/login");
	};

	const handleCartClick = () => {
		Update.Global.isDrawerOpen(true);
	};

	return (
		<div className={styles.NavbarMain}>
			<div className={styles.NavbarMenuContainer}>
				<img src={Logo} alt="Logo" width={100} />
				<Typography.Link className={styles.Link}>
					Categories
				</Typography.Link>

				<Typography.Link className={styles.Link}>
					Collection
				</Typography.Link>

				<Typography.Link className={styles.Link}>Store</Typography.Link>

				<Typography.Link className={styles.Link}>Blog</Typography.Link>
				<Typography.Link className={styles.Link}>
					Find Store
				</Typography.Link>
			</div>

			<div className={styles.NavbarMenuContainer}>
				<Typography.Link
					className={styles.Link}
					onClick={handleCartClick}
				>
					<img src={Cart} alt="" width={21} />
					<p>Cart(0)</p>
				</Typography.Link>
				<Typography.Link
					className={styles.Link}
					onClick={Auth?.User ? SignOutBtn : SignInBtn}
				>
					<img src={User} alt="" width={19} />
					{Auth?.User ? <p>Logout</p> : <p>Login</p>}
				</Typography.Link>
			</div>

			<img src={Menu} alt="" width={28} className={styles.MenuStyles}/>
		</div>
	);
};

export default index;
