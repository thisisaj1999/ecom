import React, { useEffect, useState } from "react";
import style from './Checkout.module.scss'
import Stepper from "../../components/Stepper";
import { Products, Address, Payments } from "../../components/Cart";
import { getCartItems } from "../../utils/services/other";
import { useAuth } from "../../utils/services/authentication";
import { useDashboardStore, useGlobalStore } from "../../utils/store";
import { IItemsData } from "../../contracts/IItemsData";
import { useLocation, useNavigate } from "react-router-dom";

const index = () => {

	const location = useLocation();
	const navigate = useNavigate()

	const State = {
		Dashboard: {
			cartItemsLength: useDashboardStore((State) => State.cartItemsLength)
		},
	};

	const Update = {
		Global: {
			currentPage: useGlobalStore((State) => State.setCurrentPage)
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

	useEffect(() => {
		if(location.pathname === '/checkout') {
			console.log(State.Dashboard.cartItemsLength)
			if (State.Dashboard.cartItemsLength === 0) {
				navigate('/dashboard')
			}else{
				Update.Global.currentPage('checkout')
			}
		} 
	}, [location])

	
	const CartStep: React.FC = () => {
		return (
			<div className={style.CartStepMainStyles}>
				<Products cartItems={cartItems}/>
			</div>
		);
	};

	const AddressStep: React.FC = () => {
		return <Address />;
	};

	const PaymentStep: React.FC = () => {
		return <Payments />;
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
