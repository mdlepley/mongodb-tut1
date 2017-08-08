var config = {
	expressPort: 3000,
	client: {
		mongodb: {
			defaultDatabase: "mongopop",
			defaultCollection: "simples",
			defaultUri: "mongodb://mdlepley:<PASSWORD>@cluster0-shard-00-00-mtarl.mongodb.net:27017,cluster0-shard-00-01-mtarl.mongodb.net:27017,cluster0-shard-00-02-mtarl.mongodb.net:27017/mongopop?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
		},
		mockarooUrl: "https://api.mockaroo.com/api/a9df5280?count=1000&key=a9c5e9f0"
	},
	makerMongoDBURI: "mongodb://localhost:27017/maker?authSource=admin",
	checkinCollection: "foursq"
};

module.exports = config;
