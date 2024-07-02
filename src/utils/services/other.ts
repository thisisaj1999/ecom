import { IItemsData } from "../../contracts/IItemsData";

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const pathSlugMaker = (arr: string[]): string => {
	return arr.reverse().join("/");
};

const wordsToSlug = (word: string): string =>
	word.toLowerCase().replace(/\s/g, "-");

const slugToWords = (slug: string): string =>
	slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");



interface CartItemsType {
	[key: string]: IItemsData[];
}
		
const addToCartFn = (data: IItemsData, Uid: string) => {
	const storedItems = localStorage.getItem('Cart');
	const cartItems: CartItemsType = storedItems ? JSON.parse(storedItems) : {};

	if (!cartItems[Uid]) {
		cartItems[Uid] = [];
	}

	cartItems[Uid] = [...cartItems[Uid], data];

	localStorage.setItem('Cart', JSON.stringify(cartItems));
};
		
const removeFromCartFn = (data: IItemsData, Uid: string) => {
	const storedItems = localStorage.getItem('Cart');
	if (!storedItems) return;

	const cartItems: CartItemsType = JSON.parse(storedItems);

	if (!cartItems[Uid]) return;

	cartItems[Uid] = cartItems[Uid].filter(item => item.id !== data.id);

	localStorage.setItem('Cart', JSON.stringify(cartItems));
};

const getCartItems = (Uid: string) => {
	const storedItems = localStorage.getItem('Cart');
	if (!storedItems) return;

	const cartItems: CartItemsType = JSON.parse(storedItems);
	if (!cartItems[Uid]) return;

	return cartItems[Uid]
}
		
const formatNumberWithCommas = (val:number) => {
	let numStr = val.toString();
	let lastThree = numStr.slice(-3);
	let otherNumbers = numStr.slice(0, -3);

	return otherNumbers
			? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
			: lastThree;
}

export { getRandomColor, pathSlugMaker, wordsToSlug, slugToWords, addToCartFn, removeFromCartFn, getCartItems, formatNumberWithCommas };
