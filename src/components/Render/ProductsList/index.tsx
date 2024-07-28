import React from "react";
import style from "./ProductsList.module.scss";
import { useDashboardStore } from "../../../utils/store";
import { IItemsData } from "../../../contracts/IItemsData";
import Card from "../../Card";

const index: React.FC = () => {
	const State = {
		Dashboard: {
			itemsData: useDashboardStore((State) => State.itemsData),
		},
	};

	return (
		<div className={style.ProductsListMain}>
			<h1 className={style.ProductsListMainHeading}>Quechua</h1>
			<div className={style.ProductsListSwiper}>
				<div className={style.ProductsListSwiperRow}>
					{State.Dashboard.itemsData.map((item: IItemsData) => (
            <Card data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default index;
