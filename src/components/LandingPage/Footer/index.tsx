import React from "react";
import styles from "./Footer.module.scss";

// Images
import Logo from "../../../assets/logo.svg";
import Facebook from "../../../assets/social/facebook.svg";
import Instagram from "../../../assets/social/instagram.svg";
import Youtube from "../../../assets/social/youtube.svg";
import Twitter from "../../../assets/social/x.svg";

const index: React.FC = () => {
  
	return (
		<section className={styles.FooterContainer}>
			<div className={styles.FooterLinks}>
				<div className={styles.FooterContainerLeft}>
					<div className={styles.BoltLogo}>
						<img src={Logo} alt="Logo" width={130} />
						<p>
							Experience the Great Outdoors in Style with Jolt's.
							Shop now and gear up for adventure in Jolt!
						</p>
					</div>
					<div className={styles.CategoryLinks}>
						<p>Category</p>
						<ul>
							<li>Jackets</li>
							<li>Shirts</li>
							<li>Knit</li>
							<li>T-shirts</li>
							<li>Bottoms</li>
							<li>Accesories</li>
						</ul>
					</div>
					<div className={styles.CustomerCare}>
						<p>Customer Care</p>
						<ul>
							<li>FAQ</li>
							<li>Shipping</li>
							<li>Order Status</li>
							<li>Return & Exchange</li>
						</ul>
					</div>
					<div className={styles.Company}>
						<p>Company</p>
						<ul>
							<li>Privacy</li>
							<li>Guides</li>
							<li>Term of Conditions</li>
						</ul>
					</div>
				</div>

				<div className={styles.FooterContainerRight}>
					<div className={styles.FooterSocialLinks}>
						<div className={styles.FooterSocialLinksTop}>
							<img width={28} src={Facebook} alt="Facebook" />
							<img width={28} src={Instagram} alt="Instagram" />
							<img width={32} src={Youtube} alt="Youtube" />
							<img width={23} src={Twitter} alt="Twitter" />
						</div>
						<div className={styles.FooterSocialLinksBottom}>
							<p>Call Us On + 12 332476</p>
							<p>USD $ | English</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.FooterCopyright}>
				© 2023 Bolt Studio, Inc - All Rights Reserved
			</div>
		</section>
	);
};

export default index;
