var config = {
	debug: false,
	database: {
		host: "localhost",
		user: "user",
		password: "pass",
		database: "database",
		charset : "utf8mb4"
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 