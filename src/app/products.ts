export interface Product {
	id: number;
	name: string;
	specifications: {
		color: string;
		weight: string;
		storage: string;
		price: number;
	};
	picture: string;
	quantity: number;
}

export const products = [
	{
		id: 1,
		name: "iPhone 12",
		specifications: {
			color: "black",
			weight: "250g",
			storage: "256GB",
			price: 1000
		},
		picture: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-black?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1662149951953",
		quantity: 0
	},
	{
		id: 2,
		name: "Airpods",
		specifications: {
			color: "white",
			weight: "50g",
			storage: "N/A",
			price: 200
		},
		picture: "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
		quantity: 0
	},
	{
		id: 3,
		name: "Samsung S22",
		specifications: {
			color: "black",
			weight: "250g",
			storage: "512GB",
			price: 900
		},
		picture: "https://images.mobilefun.co.uk/graphics/productgalleries/88255/b.jpg",
		quantity: 0
	},
	{
		id: 4,
		name: "Samsung Note10",
		specifications: {
			color: "black",
			weight: "250g",
			storage: "256GB",
			price: 950
		},
		picture: "https://static.fnac-static.com/multimedia/Images/FR/MDM/2d/18/bc/12326957/1540-1/tsp20221110153910/Samsung-Galaxy-Note10-Plus-256-Go-Noir.jpg",
		quantity: 0
	},
	{
		id: 5,
		name: "Phone 14",
		specifications: {
			color: "white",
			weight: "250g",
			storage: "256GB",
			price: 1300
		},
		picture: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-2up-starlight-220907_inline.jpg.large.jpg",
		quantity: 0
	}
];

