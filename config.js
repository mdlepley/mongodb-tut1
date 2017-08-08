var config = {
	expressPort: 3000,
	client: {
		mongodb: {
			defaultDatabase: "mongopop",
			defaultCollection: "simples",
			defaultUri: "mongodb://localhost:27017"
		},
		mockarooUrl: "https://api.mockaroo.com/api/a9df5280?count=1000&key=a9c5e9f0"
	},
	makerMongoDBURI: "mongodb://localhost:27017/maker?authSource=admin",
	checkinCollection: "foursq"
};

module.exports = config;
