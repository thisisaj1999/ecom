import React from "react";
import style from './Checkout.module.scss'
import Stepper from "../../components/Stepper";
import CartCard from '../../components/CartCard'
import { getCartItems } from "../../utils/services/other";
import { useAuth } from "../../utils/services/authentication";

const index = () => {

	const Auth = useAuth()
	const Uid = Auth.User?.uid

	const cartItems = getCartItems(Uid)

	const CartStep: React.FC = () => {
		return (
			<div className={style.CartStepMainStyles}>
				{cartItems?.map((item, index) => (
					<CartCard item={item} key={index}/>
				))}
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
