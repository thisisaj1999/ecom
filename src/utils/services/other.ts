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

export { getRandomColor, pathSlugMaker, wordsToSlug, slugToWords };
