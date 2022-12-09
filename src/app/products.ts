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
		picture: "assets/iphone-12.jpeg",
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
		picture: "assets/airpods.avif",
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
		picture: "assets/s22.jpg",
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
		picture: "assets/n10.jpg",
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
		picture: "assets/iphone14.jpg",
		quantity: 0
	}
];

