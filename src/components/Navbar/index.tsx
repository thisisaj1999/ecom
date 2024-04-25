import React from "react";
import { Typography } from "antd";
import styles from "./Navbar.module.scss";
import { useAuth } from "../../utils/services/authentication";
import { useNavigate } from "react-router-dom";

// Image
import User from "../../assets/user.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import Logo from "../../assets/logo.svg";

const index: React.FC = () => {

	const Auth = useAuth()

	const navigate = useNavigate();

	const SignOutBtn = async () => {
    await Auth.SignOut();
	};

  const SignInBtn = async () => {
		navigate('/login')
	};

	return (
		<div className={styles.NavbarMain}>
			<div className={styles.NavbarMenuContainer}>
				<img src={Logo} alt="Logo" width={100}/>
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
					<Typography.Link className={styles.Link} onClick={Auth?.User ? SignOutBtn : SignInBtn}>
						<img src={User} alt="" width={19} />
						{Auth?.User ? <p>Logout</p> : <p>Login</p>}
					</Typography.Link>
			</div>
		</div>
	);
};

export default index;
