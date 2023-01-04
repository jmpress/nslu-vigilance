module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [
			{
				"first_name":"Antonina",
				"last_name":"Nolan",
				"email":"test@test.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":1,
				"email_verified":false,
				"role": "admin",
				"createdAt":"2023-01-03T00:16:14.134Z",
				"updatedAt":"2023-01-03T00:16:14.134Z"
			}, 
		], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete(Users, null, {});
	}
};
