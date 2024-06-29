import React, { useEffect, useState } from "react";
import style from './Checkout.module.scss'
import Stepper from "../../components/Stepper";
import { Products, Address, Payments } from "../../components/Cart";
import { getCartItems } from "../../utils/services/other";
import { useAuth } from "../../utils/services/authentication";
import { useDashboardStore } from "../../utils/store";
import { IItemsData } from "../../contracts/IItemsData";

const index = () => {

	const State = {
		Dashboard: {
			cartItemsLength: useDashboardStore((State) => State.cartItemsLength)
		},
	};

	const Auth = useAuth()
	const Uid = Auth.User?.uid

	const [cartItems, setCartItems] = useState<IItemsData[]>([]);
	
	useEffect(() => {
		const fetchedItems = getCartItems(Uid)
		if(fetchedItems){
			setCartItems(fetchedItems)
		}
	},[State.Dashboard.cartItemsLength])

	
	const CartStep: React.FC = () => {
		return (
			<div className={style.CartStepMainStyles}>
				{cartItems?.map((item, index) => (
					<Products item={item} key={index}/>
				))}
			</div>
		);
	};

	const AddressStep: React.FC = () => {
		return (
			<div className={style.CartStepMainStyles}>
				<Address />
			</div>
		);
	};

	const PaymentStep: React.FC = () => {
		return (
			<div className={style.CartStepMainStyles}>
				<Payments />
			</div>
		);
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
