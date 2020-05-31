export type PayloadAction = {
	action: any;
};

export type Product = {
	id: String;
	name: String;
	desc: String;
	price: String;
	testo: Object;
	diametr: Object;
	weight: String;
	numberOfPersons: String;
	protein: String;
	fat: String;
	energy: String;
	img: String;
	addToCart?: any;
};
