import React from "react";
import style from './Checkout.module.scss'
import Stepper from "../../components/Stepper";
import CartCard from '../../components/CartCard'

const index = () => {
	const CartStep: React.FC = () => {
		return (
			<div className={style.CartStepMainStyles}>
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
				<CartCard />
			</div>
		);
	};

	const AddressStep: React.FC = () => {
		return "AddressStep";
	};

	const PaymentStep: React.FC = () => {
		return "PaymentStep";
	};

	return (
		<div className={style.CheckoutComponentMain}>
			<h1 className={style.DashboardMainHeading}>
				Checkout
			</h1>
			<Stepper
				FirstStep={CartStep}
				SecondStep={AddressStep}
				ThirdStep={PaymentStep}
			/>
		</div>
	);
};

export default index;
