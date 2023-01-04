module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [
			{
				"first_name":"Barrett",
				"last_name":"Carroll",
				"email":"Barrett75@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":1,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Destiny",
				"last_name":"Miller",
				"email":"Destiny30@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":2,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Cecile",
				"last_name":"Jakubowski",
				"email":"Cecile.Jakubowski93@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":3,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Chanel",
				"last_name":"Franecki",
				"email":"Chanel.Franecki@yahoo.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":4,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Adalberto",
				"last_name":"Swift",
				"email":"Adalberto_Swift@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":5,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Trisha",
				"last_name":"Rowe",
				"email":"Trisha_Rowe39@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":6,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Lloyd",
				"last_name":"Steuber",
				"email":"Lloyd.Steuber49@yahoo.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":7,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Ramon",
				"last_name":"Deckow",
				"email":"Ramon.Deckow49@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":8,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Lera",
				"last_name":"Romaguera",
				"email":"Lera.Romaguera54@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":9,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Jeramy",
				"last_name":"Hartmann",
				"email":"Jeramy.Hartmann17@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":10,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Jett",
				"last_name":"Corkery",
				"email":"Jett.Corkery@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":11,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Mikayla",
				"last_name":"Bosco",
				"email":"Mikayla.Bosco@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":12,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Daphne",
				"last_name":"Herman",
				"email":"Daphne_Herman79@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":13,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Ezra",
				"last_name":"Ledner",
				"email":"Ezra.Ledner@yahoo.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":14,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.107Z",
				"updatedAt":"2023-01-04T18:44:56.107Z"
			}, {
				"first_name":"Carmella",
				"last_name":"Grady",
				"email":"Carmella_Grady97@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":15,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.108Z",
				"updatedAt":"2023-01-04T18:44:56.108Z"
			}, {
				"first_name":"Landen",
				"last_name":"Terry",
				"email":"Landen_Terry@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":16,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.108Z",
				"updatedAt":"2023-01-04T18:44:56.108Z"
			}, {
				"first_name":"Johnson",
				"last_name":"McLaughlin",
				"email":"Johnson.McLaughlin@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":17,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.108Z",
				"updatedAt":"2023-01-04T18:44:56.108Z"
			}, {
				"first_name":"Russ",
				"last_name":"Leffler",
				"email":"Russ.Leffler12@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":18,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.108Z",
				"updatedAt":"2023-01-04T18:44:56.108Z"
			}, {
				"first_name":"Kennedy",
				"last_name":"Harris",
				"email":"Kennedy_Harris@gmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":19,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.108Z",
				"updatedAt":"2023-01-04T18:44:56.108Z"
			}, {
				"first_name":"Moses",
				"last_name":"McLaughlin",
				"email":"Moses.McLaughlin15@hotmail.com",
				"salted_hashed_pass":"$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC",
				"store_number":20,
				"email_verified":false,
				"role":"steward",
				"createdAt":"2023-01-04T18:44:56.108Z",
				"updatedAt":"2023-01-04T18:44:56.108Z"
			}, 
		], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete(Users, null, {});
	}
};