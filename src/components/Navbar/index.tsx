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
				{/* <div className={styles.Link}>
					<div className={styles.search}>
						<input type="text" placeholder=" " />
						<div>
                <svg>
                    <use xlinkHref="#path"></use>
                </svg>
            </div>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						style={{ display: "none" }}
					>
						<symbol
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 160 28"
							id="path"
						>
							<path
								d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
								transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
							></path>
						</symbol>
					</svg>
					<p>Search</p>
				</div> */}

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
		</div>
	);
};

export default index;
